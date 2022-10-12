import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./feed.css";

function Feed() {
  const feed = useSelector((state: any) => state.board.feed);
  return (
    <Row className="feed">
      <Col xs={6}>
        {feed.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
            }}
          >
            {feed.map((item: any, index: number) => (
              <li key={index} className="feed-item">
                <div
                  className={
                    index === feed.length - 1 ? "blink-cursor lime" : ""
                  }
                >
                  {item}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Col>
    </Row>
  );
}

export default Feed;
