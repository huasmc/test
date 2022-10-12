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
      <Row>
        <Col
          className="d-none d-lg-block"
          xs={{ span: 3, order: 3 }}
          sm={{ span: 3, order: 1 }}
        >
          <Feed />
        </Col>
        <Col
          xs={{ span: 7, order: 2 }}
          sm={{ span: 7, order: 2 }}
          className="board"
        >
          <TokenSelector
            playerToken={playerToken}
            setPlayerToken={setPlayerToken}
            resetToken={resetToken}
          />

          <Board playerToken={playerToken} setThinking={setThinking} />
        </Col>
        <Col xs={{ span: 4, order: 1 }} sm={{ span: 4, order: 3 }} />
      </Row>
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
