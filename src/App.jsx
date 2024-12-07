import React, { useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
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
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock + change }
          : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
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
          {/* Sol taraf: Envanter Listesi */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <InventoryList categories={categories} products={products} />
            </Paper>
          </Grid>

          {/* Orta taraf: Kategori ve Ürün Ekleme */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <CategoryManager onAddCategory={handleAddCategory} />
              <ProductManager
                categories={categories}
                onAddProduct={handleAddProduct}
              />
            </Paper>
          </Grid>

          {/* Sağ taraf: Stok Yönetimi */}
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
    </div>
  );
}

export default App;
