import "../App.css";
import { Row, Col } from "react-bootstrap";

type tokenSelectorProps = {
  playerToken: string;
  setPlayerToken: (token: string) => void;
  resetToken: () => void;
};

function TokenSelector({
  playerToken,
  setPlayerToken,
  resetToken,
}: tokenSelectorProps) {
  return (
    <Row className="token-selector">
      <Col xs={6}>
        <h3 className="" style={{ color: "blueviolet" }}>
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
  );
}

export default TokenSelector;
