import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";

function ProductManager({ categories, onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert("Please select a category!");
      return;
    }
    onAddProduct(productName, selectedCategory, stock);
    setProductName("");
    setStock(0); // Clear form
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add a Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          displayEmpty
          fullWidth
          required
          sx={{ mb: 2 }}
        >
          <MenuItem value="">Select Category</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          label="Stock Quantity"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Product
        </Button>
      </form>
    </Paper>
  );
}

export default ProductManager;
