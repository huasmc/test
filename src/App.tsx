import "./App.css";
import Board from "./components/board";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [playerToken, setPlayerToken] = useState<string>("");

  const resetToken = () => setPlayerToken("");
  return (
    <div className="App">
      <Row className="token-selector">
        <Col xs={6}>
          <h3>
            {playerToken === ""
              ? "SELECT YOUR TOKEN:"
              : `YOUR TOKEN: ${playerToken}`}
          </h3>
        </Col>
        <Col>
          <button
            onClick={() => setPlayerToken("X")}
            disabled={playerToken !== ""}
          >
            X
          </button>
        </Col>
        <Col>
          <button
            onClick={() => setPlayerToken("O")}
            disabled={playerToken !== ""}
          >
            O
          </button>
        </Col>
        <Col>
          <button>
            <img alt="" src="reset.png" className="icon" onClick={resetToken} />
          </button>
        </Col>
      </Row>
      <Board playerToken={playerToken} />
    </div>
  );
}

export default App;
