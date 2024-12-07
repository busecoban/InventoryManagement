import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Inventory Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
