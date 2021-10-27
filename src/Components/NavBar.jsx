import { AppBar, Badge, IconButton, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import Product from "./Product";
import useStyles from "./styles";

const NavBar = ({ OnSearch }) => {
  const navStyles = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={navStyles.appBar}>
      <IconButton>
        <Search />
        <InputBase placeholder="Search By Category" onChange={OnSearch} />
      </IconButton>
    </AppBar>
  );
};

export default NavBar;
