
import { configureStore } from "@reduxjs/toolkit";
import pedidosReducer from "./pedidos.slice";


export const store = configureStore({
  reducer: {
    pedidos: pedidosReducer,
  }}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
