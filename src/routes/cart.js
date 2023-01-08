import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, outCart } from "../store.js";

function Cart() {
  let item = useSelector((state) => {
    return state.cartItem;
  });
  let cartItem = item.map((data, i) => (
    <Item
      key={i}
      number={i}
      id={data.id}
      name={data.name}
      count={data.count}
    ></Item>
  ));
  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>삭제하기</th>
        </tr>
      </thead>
      <tbody>{cartItem}</tbody>
    </Table>
  );
}

function Item({ number, id, name, count }) {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{number + 1}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>
        <button onClick={() => dispatch(increase(id))}>+</button>
      </td>
      <td>
        <button onClick={() => dispatch(outCart(id))}>X</button>
      </td>
    </tr>
  );
}

export default Cart;
