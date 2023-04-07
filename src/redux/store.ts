import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: { productReducer },
});

// how to connect store to React Redux
// React Redux is typed
// but it doesn't know the schema for our store.
// so we need to give it the schema for our store and our dispatcher

export type RootState = ReturnType<typeof store.getState>; // the total state of the store
export type AppDispatch = typeof store.dispatch;
