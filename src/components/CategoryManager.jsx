import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

function CategoryManager({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(categoryName);
    setCategoryName("");
  };

  return (
    <Paper elevation={3} className="category-manager">
      <Typography variant="h6" className="category-manager-title">
        Add a Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="category-manager-button"
        >
          Add Category
        </Button>
      </form>
    </Paper>
  );
}

export default CategoryManager;
