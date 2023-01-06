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
  return <>{recentGroup}</>;
}

export default Recent;
