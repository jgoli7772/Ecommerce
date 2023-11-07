import React from "react";
// import { Link } from "react-router-dom";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div className="whole" data-test="home">
      <h5>Choose your style..!!</h5>
      <Product />
    </div>
  );
};
export default Home;
