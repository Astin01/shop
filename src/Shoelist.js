import "./App.css";
import { Link } from "react-router-dom";
function Shoe(props) {
  return (
    <div className="col-md-4">
      <Link to={`/detail/${props.id}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${props.id + 1}.jpg`}
          width="80%"
        />
      </Link>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export { Shoe };
