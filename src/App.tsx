import "./App.css";
import Board from "./components/board";
import { useState } from "react";
import TokenSelector from "./components/tokenSelector";

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
        <TokenSelector
          playerToken={playerToken}
          setPlayerToken={setPlayerToken}
          resetToken={resetToken}
        />
        <Board playerToken={playerToken} setThinking={setThinking} />
      </div>
    </div>
  );
}

export default App;
