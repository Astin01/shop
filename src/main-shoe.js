import "./App.css";
function Shoe(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.id + 1}.jpg`}
        width="80%"
      />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}

export { Shoe };
