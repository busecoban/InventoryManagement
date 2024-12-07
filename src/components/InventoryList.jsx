import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import "../styles/App.css"; // App.css dosyasını import et

function InventoryList({ categories, products }) {
  return (
    <div className="inventory-list">
      <h2>Inventory</h2>
      {categories.map((category) => (
        <div key={category.id}>
          {/* Kategori Başlıkları */}
          <div className="category">{category.name}</div>

          {/* Ürünler */}
          <div className="products">
            {products
              .filter((product) => product.categoryId === category.id) // Kategoriye ait ürünleri filtreliyoruz
              .map((product) => (
                <div key={product.id} className="product">
                  <span>{product.name}</span>
                  <span className="stock">Stock: {product.stock}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InventoryList;
