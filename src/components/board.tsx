import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import post from "../service/fetch";
import URLS from "../service/urls";
import flattenBoard from "../utils/flattenBoard";
import unflattenBoard from "../utils/unflattenBoard";
import "./board.css";

const boardCells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

type boardProps = {
  playerToken: string;
};

function Board({ playerToken }: boardProps) {
  const [cells, setCells] = useState<(number | string)[][]>(boardCells);
  const [botToken, setBotToken] = useState<string>("");

  useEffect(() => {
    if (playerToken === "X") setBotToken("O");
    else setBotToken("X");
  }, [playerToken]);

  const selectCell = async (
    cell: number | string,
    index: number,
    bot: boolean
  ) => {
    if (playerToken === "") return;
    let updatedCells: (number | string)[][] = [[]];
    if (!bot) {
      if (typeof cell === "string") return;
      updatedCells = cells.map((row: (number | string)[]) => {
        if (row[index] === cell) {
          row[index] = playerToken;
        }
        return row;
      });
    }
    setCells(updatedCells);
    const aiSpot = await post(URLS.AI_BOT, flattenBoard(cells), playerToken);
    selectBotCell(aiSpot);
  };

  const selectBotCell = (spot: number) => {
    const flatBoard = flattenBoard(cells);
    const newFlatBoard = flatBoard.map((cell, index) => {
      if (index === spot) cell = botToken;
      return cell;
    });
    setCells(unflattenBoard(newFlatBoard, 3));
  };

  return (
    <div className="board">
      {cells.map((row, index) => (
        <Row className={`row${index}`} key={index}>
          {row.map((cell, index) => (
            <Col
              className={`cell cell${index}`}
              key={index}
              onClick={() => selectCell(cell, index, false)}
            >
              <span className="text token">
                {typeof cell === "string" ? cell : ""}
              </span>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Board;
