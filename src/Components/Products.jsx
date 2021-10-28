import React from "react";
import { Button, Grid } from "@material-ui/core";

import Product from "./Product";
import useStyles from "./styles";

const Products = ({ products }) => {
  const styles = useStyles();
  const items = [
    { id: 1, quantity: 0 },
    { id: 2, quantity: 0 },
    { id: 3, quantity: 0 },
    { id: 4, quantity: 0 },
  ];

  const handlePurchase = () => {
    items.forEach((i) => {
      if (i.quantity > 0) {
        alert(`${products[i.id - 1].name} : ${i.quantity}`);
      }
    });
  };

  return (
    <main>
      <Grid container justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product products={product} onAddCart={items} />
          </Grid>
        ))}
      </Grid>
      <Button
        className={styles.purchase}
        variant="contained"
        color="primary"
        onClick={handlePurchase}
      >
        Purchase
      </Button>
    </main>
  );
};

export default Products;
