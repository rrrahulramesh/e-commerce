import React from "react";
import { Button, Grid } from "@material-ui/core";

import Product from "./Product";
import useStyles from "./styles";

const Products = ({ products }) => {
  const styles = useStyles();
  const items = [];

  const handlePurchase = () => {
    const a = items.map((i) => i.id i.id);
    console.log(a);
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
