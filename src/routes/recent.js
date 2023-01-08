import { Toast } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
function Recent({ shoes }) {
  let watch = localStorage.getItem("watched");
  let parseWatch = JSON.parse(watch);
  let recentGroup;
  if (parseWatch) {
    recentGroup = parseWatch.map((data) => (
      <ListGroup.Item action href={`/detail/${data}`}>
        {data}
      </ListGroup.Item>
    ));
  }
  return (
    <Toast style={{ position: "absolute", top: "55px", right: "0" }}>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          position="middle-end"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Recent</strong>
      </Toast.Header>
      <Toast.Body>{recentGroup}</Toast.Body>
    </Toast>
  );
}

export default Recent;
