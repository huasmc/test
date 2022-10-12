import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import flattenBoard from "../utils/flattenBoard";
import unflattenBoard from "../utils/unflattenBoard";
import { useDispatch, useSelector } from "react-redux";
import "./board.css";
import { addFeed, fetchBotSpot, resetFeed } from "./boardSlice";

const boardCells = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

type boardProps = {
  playerToken: string;
  setThinking: Dispatch<SetStateAction<boolean>>;
};

function Board({ playerToken, setThinking }: boardProps) {
  const [cells, setCells] = useState<(number | string)[][]>(boardCells);
  const [botToken, setBotToken] = useState<string>("");
  const botSpot = useSelector((state: any) => state.board.spot);
  const isBotReady = useSelector((state: any) => state.board.ready);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (playerToken) dispatch(addFeed("Tokens selected"));
    if (playerToken === "X") {
      setBotToken("O");
    } else if (playerToken === "") reset();
    else setBotToken("X");
  }, [playerToken]);

  useEffect(() => setThinking(!isBotReady), [isBotReady]);

  const selectCell = async (
    cell: number | string,
    index: number,
    bot: boolean
  ) => {
    if (playerToken === "" || !isBotReady) return;
    let updatedCells: (number | string)[][] = [[]];
    if (!bot) {
      if (typeof cell === "string") return;
      updatedCells = cells.map((row: (number | string)[]) => {
        if (row[index] === cell) {
          row[index] = playerToken;
          dispatch(addFeed(`Player: ${playerToken} has played`));
        }
        return row;
      });
    }
    setCells(updatedCells);
    if (!isOneSpotLeft()) {
      dispatch(fetchBotSpot({ board: flattenBoard(cells), playerToken }));
    }
  };

  const selectBotCell = (spot: number) => {
    const flatBoard = flattenBoard(cells);
    const newFlatBoard = flatBoard.map((cell, index) => {
      if (index === spot) {
        cell = botToken;
        dispatch(addFeed(`Player: ${botToken} has played`));
      }
      return cell;
    });
    setCells(unflattenBoard(newFlatBoard, 3));
  };

  useEffect(() => {
    selectBotCell(botSpot);
  }, [botSpot]);

  const reset = () => {
    setCells([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]);
    dispatch(resetFeed());
  };

  const isOneSpotLeft = () => {
    const flatBoard = flattenBoard(cells);
    const remainingSpots: number[] = flatBoard.filter(
      (spot) => typeof spot !== "string"
    ) as number[];
    if (remainingSpots.length <= 1) return true;
    return false;
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
              <span className="lime token">
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
