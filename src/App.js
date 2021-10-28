import React, { Component, useState } from "react";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

const products = [
  {
    name: "Potato",

    id: 1,

    price: 30,

    available: 1,

    vendor: "Himachal Pvt Ltd",

    category: "Vegetables",

    image: "../potato.jpg",
  },

  {
    name: "Banana",

    id: 2,

    price: 50,

    available: 1,

    category: "Fruits",

    vendor: "Organic farms",
    image: "../banana.jpg",
  },

  {
    name: "Carrot",

    id: 3,

    price: 20,

    available: 0,

    category: "Vegetables",

    vendor: "Mallikarjuna farms",

    image: "../carrot.jpg",
  },

  {
    name: "Orange",

    id: 4,

    price: 25,

    available: 1,

    vendor: "Nagpur farms",

    category: "Fruits",
    image: "../orange.jpg",
  },
];

const App = () => {
  const [cart, setCart] = useState(0);

  const [product, setFilteredProducts] = useState(products);

  const handleAddCart = (e) => {
    setCart(cart + 1);
    console.log(products.id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    const filtered = [...products].filter(
      (product) => product.category.toLowerCase().indexOf(e.target.value) > -1
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <NavBar cartCount={cart} OnSearch={handleSearch} />
      <Products products={product} />
    </div>
  );
};

export default App;
