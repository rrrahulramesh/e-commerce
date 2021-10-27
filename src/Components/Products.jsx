import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product";

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

const Products = () => {
  return (
    <main>
      <Grid container justify="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
