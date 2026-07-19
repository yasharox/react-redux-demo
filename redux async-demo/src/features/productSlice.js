import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetxhProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    // We can only write functions as reducers which are -
    // 1. Pure function
    // 2. Synchrounous
  },
  extraReducers: (builder) => {
    // asynchronous will be here
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
