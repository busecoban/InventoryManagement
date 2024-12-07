import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import "../styles/App.css"; // App.css dosyasını import et

function StockManager({
  categories,
  products,
  onUpdateStock,
  onDeleteProduct,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [stockChange, setStockChange] = useState("");

  const handleUpdate = (operation) => {
    if (!selectedProduct) {
      alert("Please select a product!");
      return;
    }

    const change = parseInt(stockChange, 10);
    if (isNaN(change)) {
      alert("Please enter a valid number!");
      return;
    }

    let finalChange = 0;
    if (operation === "increase") finalChange = change;
    if (operation === "decrease") finalChange = -change;

    onUpdateStock(selectedProduct, finalChange);
    setStockChange(""); // Clear input field
  };

  return (
    <Paper elevation={3} className="stock-manager">
      <Typography variant="h6" gutterBottom>
        Manage Stock
      </Typography>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        displayEmpty
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Select Category</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value)}
        displayEmpty
        fullWidth
        disabled={!selectedCategory}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Select Product</MenuItem>
        {products
          .filter((product) => product.categoryId === selectedCategory)
          .map((product) => (
            <MenuItem key={product.id} value={product.id}>
              {product.name}
            </MenuItem>
          ))}
      </Select>
      <TextField
        label="Stock Change"
        type="number"
        value={stockChange}
        onChange={(e) => setStockChange(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      {/* Butonları özel sınıflarla stilize et */}
      <Button
        variant="contained"
        className="increase-stock"
        fullWidth
        onClick={() => handleUpdate("increase")}
      >
        Increase Stock
      </Button>
      <Button
        variant="outlined"
        className="decrease-stock"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => handleUpdate("decrease")}
      >
        Decrease Stock
      </Button>
      <Button
        variant="outlined"
        color="error"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => onDeleteProduct(selectedProduct)}
        disabled={!selectedProduct}
      >
        Delete Product
      </Button>
    </Paper>
  );
}

export default StockManager;
