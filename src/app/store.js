import { configureStore } from "@reduxjs/toolkit";
import { CryptoApi } from "../CryptoApi/Api";
import { NewsApi } from "../CryptoApi/NewsApi";

export const store = configureStore({
  reducer: {
    [CryptoApi.reducerPath]: CryptoApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(CryptoApi.middleware) // Existing middleware
      .concat(NewsApi.middleware), // New middleware for NewsAPI
});
