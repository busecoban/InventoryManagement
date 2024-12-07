import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/App.css"; // CSS dosyasını import et

function Header() {
  return (
    <AppBar position="static" className="header">
      {" "}
      {/* className ile stil veriyoruz */}
      <Toolbar>
        <Typography variant="h5" component="div" className="header-title">
          Inventory Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
