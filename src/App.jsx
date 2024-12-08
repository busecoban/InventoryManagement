import React, { useState } from "react";
import { Container, Grid, Paper, Snackbar, Alert } from "@mui/material";
import Header from "./components/Header";
import InventoryList from "./components/InventoryList";
import CategoryManager from "./components/CategoryManager";
import ProductManager from "./components/ProductManager";
import StockManager from "./components/StockManager";
import backgroundImage from "./assets/bck.png";

import { mockCategories, mockProducts } from "./mockData";

function App() {
  const [categories, setCategories] = useState(mockCategories);
  const [products, setProducts] = useState(mockProducts);
  const [alerts, setAlerts] = useState([]); // Store alerts here
  const [alertOpen, setAlertOpen] = useState(false); // Control alert visibility

  const handleAddCategory = (categoryName) => {
    if (
      categories.some(
        (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
      )
    ) {
      alert("This category already exists!");
      return;
    }

    const newCategory = { id: Date.now(), name: categoryName };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const handleAddProduct = (productName, categoryId, stock) => {
    if (
      products.some(
        (prod) => prod.name.toLowerCase() === productName.toLowerCase()
      )
    ) {
      alert("This product already exists!");
      return;
    }

    const newProduct = { id: Date.now(), name: productName, categoryId, stock };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleUpdateStock = (productId, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          const oldStock = product.stock;
          const newStock = product.stock + change;

          // Check for low stock
          if (newStock <= 5 && oldStock > 5) {
            // Low stock alert
            setAlerts((prevAlerts) => [
              ...prevAlerts,
              `${product.name} has only ${newStock} items left!`,
            ]);
            setAlertOpen(true);
          }

          // Stock update alert
          setAlerts((prevAlerts) => [
            ...prevAlerts,
            `${product.name} stock changed from ${oldStock} to ${newStock}`,
          ]);
          return { ...product, stock: newStock };
        }
        return product;
      })
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  // Close the alert Snackbar
  const closeAlert = () => {
    setAlertOpen(false);
    setAlerts([]);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* Left Side: Inventory List */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InventoryList categories={categories} products={products} />
            </Paper>
          </Grid>

          {/* Middle Side: Category and Product Management */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <CategoryManager onAddCategory={handleAddCategory} />
              <ProductManager
                categories={categories}
                onAddProduct={handleAddProduct}
              />
            </Paper>
          </Grid>

          {/* Right Side: Stock Management */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <StockManager
                categories={categories}
                products={products}
                onUpdateStock={handleUpdateStock}
                onDeleteProduct={handleDeleteProduct}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for Alerts */}
      <Snackbar
        open={alertOpen}
        onClose={closeAlert}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeAlert} severity="info" sx={{ width: "100%" }}>
          {alerts[alerts.length - 1]} {/* Show the last alert */}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
