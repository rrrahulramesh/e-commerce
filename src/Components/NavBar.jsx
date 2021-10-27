import { AppBar, Badge, IconButton, InputBase } from "@material-ui/core";
import {
  Filter,
  Filter2,
  FilterList,
  Search,
  ShoppingCart,
} from "@material-ui/icons";
import React from "react";
import Product from "./Product";
import useStyles from "./styles";

const NavBar = ({ cartCount, onFilter }) => {
  const navStyles = useStyles();
  return (
    <AppBar position="fixed" color="inherit">
      <IconButton>
        <Search />
        <InputBase placeholder="Search By Category" value={onFilter} />
        <Badge badgeContent={cartCount} color="primary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </AppBar>
  );
};

export default NavBar;
