import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Shoe } from "./main-shoe.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Product } from "./product.js";

function App() {
  const navigate = useNavigate();
  let [shoes] = useState(data);
  let shoesdata = shoes.map((data) => (
    <Shoe id={data.id} title={data.title} price={data.price}></Shoe>
  ));
  let product = shoes.map((data) => (
    <Product
      id={data.id}
      title={data.title}
      price={data.price}
      content={data.content}
    ></Product>
  ));
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
export default App;
