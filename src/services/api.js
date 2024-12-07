import axios from "axios";
import { USE_MOCK_DATA, API_BASE_URL } from "../config";
import { categories, products, notifications } from "../mockData";

// Kategorileri getir
export const getCategories = async () => {
  if (USE_MOCK_DATA) return Promise.resolve(categories);
  const response = await axios.get(`${API_BASE_URL}/categories`);
  return response.data;
};

// Ürünleri getir
export const getProducts = async () => {
  if (USE_MOCK_DATA) return Promise.resolve(products);
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

// Bildirimleri getir
export const getNotifications = async () => {
  if (USE_MOCK_DATA) return Promise.resolve(notifications);
  const response = await axios.get(`${API_BASE_URL}/notifications`);
  return response.data;
};

// Yeni kategori ekle
export const addCategory = async (category) => {
  if (USE_MOCK_DATA) {
    categories.push(category);
    return Promise.resolve(category);
  }
  const response = await axios.post(`${API_BASE_URL}/categories`, category);
  return response.data;
};

// Kategori sil
export const deleteCategory = async (id) => {
  if (USE_MOCK_DATA) {
    const index = categories.findIndex((category) => category.id === id);
    if (index > -1) categories.splice(index, 1);
    return Promise.resolve();
  }
  await axios.delete(`${API_BASE_URL}/categories/${id}`);
};

// Yeni ürün ekle
export const addProduct = async (product) => {
  if (USE_MOCK_DATA) {
    products.push(product);
    return Promise.resolve(product);
  }
  const response = await axios.post(`${API_BASE_URL}/products`, product);
  return response.data;
};

// Ürün sil
export const deleteProduct = async (id) => {
  if (USE_MOCK_DATA) {
    const index = products.findIndex((product) => product.id === id);
    if (index > -1) products.splice(index, 1);
    return Promise.resolve();
  }
  await axios.delete(`${API_BASE_URL}/products/${id}`);
};

// Ürün stoğunu güncelle
export const updateProductStock = async (id, newStock) => {
  if (USE_MOCK_DATA) {
    const product = products.find((p) => p.id === id);
    if (product) {
      product.stock = newStock;
      return Promise.resolve(product);
    }
    return Promise.reject("Product not found");
  }
  const response = await axios.put(`${API_BASE_URL}/products/${id}`, {
    stock: newStock,
  });
  return response.data;
};
