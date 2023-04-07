import { IProduct } from "@/libs/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  homeProducts: IProduct[];
}

const initialState: IInitialState = {
  homeProducts: [],
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.homeProducts = action.payload;
    },
  },
});

export const { setProducts } = products.actions;
export default products.reducer;
