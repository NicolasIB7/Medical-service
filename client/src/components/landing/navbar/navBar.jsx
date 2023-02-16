import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

//router
import { Link } from "react-router-dom";
import Logo from "../../../assets/logoiCare.png";
//styles
const navbar = {
  backgroundColor: "#F0F8FF",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  height: "6.5rem",
  paddingLeft: "5rem",
};
const butonLogin = {
  marginLeft: "2rem",
};
//component
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={navbar}>
          <Link to="/">
            <CardMedia component="img" height="90" image={Logo} alt="logo" />
          </Link>
          <ButtonGroup>
            <Button color="primary">
              <Link to="/work">Work with us</Link>
            </Button>
            <Button color="primary">
              <Link to="/about">About</Link>
            </Button>
            <Button color="primary">
              <Link to="/services">Services</Link>
            </Button>
            <Button color="primary">
              <Link to="/blog">Blog</Link>
            </Button>
            <ButtonGroup style={butonLogin}>
              <Button color="primary">
                <Link to="/loginClient">Client Login</Link>
              </Button>
              <Button color="primary">
                <Link to="/loginMedic">Medic Login</Link>
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
