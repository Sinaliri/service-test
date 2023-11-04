// productsSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with the given array structure
const initialState = {
  service: [
    { id: "1", name: "Living room ", count: 0, price: 1000 },
    { id: "2", name: "Terace", count: 0, price: 3000 },
    { id: "3", name: "Bedroom", count: 0, price: 4000 },
    { id: "4", name: "Bathroom", count: 0, price: 3000 },
    { id: "5", name: "Kitchen", count: 0, price: 2000 },
    { id: "6", name: "Dining room", count: 0, price: 1000 },
    // ... other initial items
  ],
};

const serviceSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      const { id } = action.payload;
      const product = state.service.find((item) => item.id === id);
      if (product) {
        product.count++;
      }
    },
    decreaseCount: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const product = state.service.find((item) => item.id === id);
      if (product && product.count > 0) {
        product.count--;
      }
    },
    addNewItem: (state, action) => {
      // action.payload should contain the new item's id and price
      const { id, price } = action.payload;
      state.service.push({ id, count: 1, price });
    },
  },
});

// Create a selector to calculate the sum of prices
export const selectTotalPrice = (state) =>
  state.products.reduce(
    (total, product) => total + product.count * product.price,
    0
  );

export const { increaseCount, decreaseCount, addNewItem } =
  serviceSlice.actions;

export default serviceSlice.reducer;
