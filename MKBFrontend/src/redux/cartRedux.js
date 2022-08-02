import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    updateProduct: (state, { payload }) => {
      state.products = state.products.map((product) =>
        product._id === payload.id &&
        product.size === payload.size &&
        product.color === payload.color
          ? { ...product, quantity: product.quantity + payload.quantity }
          : product
      )
      state.total += payload.quantity < 1 ? -payload.price : payload.price
    },
    deleteProduct: (state, { payload }) => {
      state.quantity -= 1
      state.products = state.products.filter(
        ({ _id: id, size, color }) =>
          id !== payload.id || size !== payload.size || color !== payload.color
      )
      state.total -= payload.totalPrice
    },
}
})

export const { addProduct,updateProduct,deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;