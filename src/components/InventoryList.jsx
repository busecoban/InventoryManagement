import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import "../styles/App.css"; // App.css dosyasını import et

function InventoryList({ categories, products }) {
  return (
    <div className="inventory-list">
      <h2>Inventory</h2>
      <List>
        {categories.map((category) => (
          <div key={category.id}>
            <ListItem>
              <ListItemText primary={category.name} />
            </ListItem>

            {/* Kategoriye ait ürünler */}
            <List component="div" disablePadding>
              {products
                .filter((product) => product.categoryId === category.id) // Kategoriye ait ürünleri filtreliyoruz
                .map((product) => (
                  <ListItem key={product.id} sx={{ pl: 4 }}>
                    <ListItemText
                      primary={product.name}
                      secondary={`Stock: ${product.stock}`}
                    />
                  </ListItem>
                ))}
            </List>
          </div>
        ))}
      </List>
    </div>
  );
}

export default InventoryList;
