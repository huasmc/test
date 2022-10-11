import "./App.css";
import Board from "./components/board";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [playerToken, setPlayerToken] = useState<string>("");
  const [thinking, setThinking] = useState<boolean>(false);

  const resetToken = () => setPlayerToken("");
  return (
    <div className="App">
      <iframe
        src={thinking ? "https://giphy.com/embed/ofyx9DjUuFGPC" : ""}
        className="giphy"
      />
      <div className="content">
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
              <img
                alt=""
                src="reset.png"
                className="icon"
                onClick={resetToken}
              />
            </button>
          </Col>
        </Row>
        <Board playerToken={playerToken} setThinking={setThinking} />
      </div>
    </div>
  );
}

export default App;
