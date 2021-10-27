import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";

import useStyles from "./styles";

const Product = ({ product }) => {
  const productStyles = useStyles();

  return (
    <Card className={product.root}>
      <CardMedia
        className={productStyles.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={productStyles.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h5" gutterBottom>
            {product.price}
          </Typography>
        </div>
        <Typography variant="h6" color="textSecondary">
          Vendor: {product.vendor}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={productStyles.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
