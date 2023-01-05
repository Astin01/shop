import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartItem = createSlice({
  name: "cartItem",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state) {
      state.count += 1;
    },
  },
});

export default configureStore({
  reducer: {
    cartItem: cartItem.reducer,
  },
});
