import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "./data.js";
import { Shoe } from "./main-shoe.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Product } from "./product.js";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let shoesdata = shoes.map((data) => (
    <Shoe id={data.id} title={data.title} price={data.price}></Shoe>
  ));
  function dataServer() {
    setLoading(true);
    if (count == 0) {
      axios
        .get("https://codingapple1.github.io/shop/data2.json")
        .then((result) => {
          let copy = [...shoes, ...result.data];
          // copy.push(...result.data);
          setShoes(copy);
          setCount(count + 1);
          setLoading(false);
        })
        .catch(() => {
          console.log("실패");
        });
    } else if (count == 1) {
      axios
        .get("https://codingapple1.github.io/shop/data3.json")
        .then((result) => {
          let copy2 = [...shoes, ...result.data];
          // copy.push(...result.data);
          setShoes(copy2);
          setCount(count + 1);
          setLoading(false);
        })
        .catch(() => {
          console.log("실패");
        });
    } else {
      alert("더이상 상품이 없습니다");
    }
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="app-navbar">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Product</Nav.Link>
            <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">{shoesdata}</div>
                {count < 2 ? (
                  <button
                    onClick={() => {
                      dataServer();
                    }}
                  >
                    {loading == true ? "로딩중..." : "더보기"}
                  </button>
                ) : null}
              </div>
            </div>
          }
        />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/detail/:parms" element={<Product shoes={shoes} />} />
        {/* <Route path="*" element={<div>없는페이지임</div>} /> */}
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

// function ServerData(props) {
//   if (props.count == 0) {
//     axios
//       .get("https://codingapple1.github.io/shop/data2.json")
//       .then((result) => {
//         let copy = [...props.shoes, ...result.data];
//         // copy.push(...result.data);
//         props.setShoes(copy);
//         props.setCount(props.count + 1);
//       })
//       .catch(() => {
//         console.log("실패");
//       });
//   } else {
//     axios
//       .get("https://codingapple1.github.io/shop/data3.json")
//       .then((result) => {
//         let copy2 = [...props.shoes, ...result.data];
//         // copy.push(...result.data);
//         props.setShoes(copy2);
//         props.setCount(props.count + 1);
//       })
//       .catch(() => {
//         console.log("실패");
//       });
//   }
// }
export default App;
