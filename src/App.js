import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Shoe } from "./main-shoe.js";
import { Routes, Route, Link } from "react-router-dom";
import { Product } from "./product.js";

function App() {
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Product</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
        <Route path="/detail" element={<>{product}</>} />
      </Routes>
    </div>
  );
}

export default App;
