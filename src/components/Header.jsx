import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/App.css"; // CSS dosyasını import et

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#E7D6C4" }}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
        >
          Inventory Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
