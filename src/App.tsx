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
        src={thinking ? "https://giphy.com/embed/ofyx9DjUuFGPC" : ""}
        className="giphy"
      />

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
    </div>
  );
}

export default App;
