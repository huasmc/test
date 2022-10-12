import "./App.css";
import Board from "./components/board";
import { useState } from "react";
import TokenSelector from "./components/tokenSelector";
import Feed from "./components/feed";
import { Row, Col } from "react-bootstrap";

function App() {
  const [playerToken, setPlayerToken] = useState<string>("");
  const [thinking, setThinking] = useState<boolean>(false);

  const resetToken = () => setPlayerToken("");
  return (
    <div className="App">
      <iframe
        src={thinking ? "https://giphy.com/embed/ofyx9DjUuFGPC" : "load.jpg"}
        className="giphy"
        scrolling="no"
      />
      <a href="https://github.com/huasmc/tic-tac-toe-react-ts" target="_blank">
        <img id="gh-logo" alt="" src="github.png" />
      </a>
      <div className="content">
        <Row>
          <Col xs={3}>
            <Feed />
          </Col>
          <Col xs={6}>
            <TokenSelector
              playerToken={playerToken}
              setPlayerToken={setPlayerToken}
              resetToken={resetToken}
            />

            <Board playerToken={playerToken} setThinking={setThinking} />
          </Col>
          <Col xs={4} />
        </Row>
      </div>
      <Row>
        <div
          style={{
            width: "100vw",
            height: "2px",
            marginTop: "22vh auto",
            display: "flex",
            justifyContent: "center",
            color: "gray",
          }}
        >
          <span></span>
        </div>
      </Row>
    </div>
  );
}

export default App;
