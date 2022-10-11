import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./board.css";

const boardCells = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];

function Board() {
  const [cells, setCells] = useState<(number | string)[][]>(boardCells);

  const selectCell = (cell: number | string, index: number) => {
    if (typeof cell === "string") return;
    const updatedCells = cells.map((row: (number | string)[]) => {
      if (row[index] === cell) {
        row[index] = "X";
      }
      return row;
    });
    setCells(updatedCells);
  };

  return (
    <div className="board">
      {cells.map((row, index) => (
        <Row key={index}>
          {row.map((cell, index) => (
            <Col
              className="cell"
              key={index}
              onClick={() => selectCell(cell, index)}
            >
              <span className="text token">{cell}</span>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Board;
