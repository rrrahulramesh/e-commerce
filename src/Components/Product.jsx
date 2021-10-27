import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";

import useStyles from "./styles";

const Product = ({ products, onAddCart }) => {
  const productStyles = useStyles();

  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
    onAddCart.push(JSON.stringify({ id: products.id, quantity: count }));
    console.log(onAddCart);
  };

  return (
    <Card className={productStyles.root}>
      <CardMedia
        className={productStyles.media}
        image={products.image}
        title={products.name}
      />
      <CardContent>
        <div className={productStyles.CardContent}>
          <Typography variant="h5" gutterBottom>
            {products.name}
          </Typography>

          <Typography variant="h5" gutterBottom>
            &#8377; {products.price}
          </Typography>
        </div>
        <Typography variant="h6" color="textSecondary">
          {products.available ? "In Stock" : "Out of Stock"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={productStyles.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleChange}>
          <Badge badgeContent={count} color="secondary">
            <AddShoppingCart />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
