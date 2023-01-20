
// import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { productsApi } from "./features/apiSlice";
// export const store = configureStore({
//   reducer: {
//     [productsApi.reducerPath]: productsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productsApi.middleware),
// });


import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./features/apiSlice";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);