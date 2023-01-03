import "./App.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  let [alert, setAlert] = useState(true);
  let [input, setInput] = useState(0);
  useEffect(() => {
    setTimeout(() => setAlert(false), 2000);
  }, []);
  let { parms } = useParams();
  function isId(element) {
    if (element.id == parms) {
      return true;
    }
  }
  let onChange = useEffect((e) => {}, [input]);
  const product = props.shoes.find(isId);
  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              product.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          {isNaN(input) ? (
            alert("숫자만 입력해주세요")
          ) : (
            <input type="text" onChange={onChange} />
          )}
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export { Product };
