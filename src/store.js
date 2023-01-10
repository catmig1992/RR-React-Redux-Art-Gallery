import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducers from "./features/dataSlice";
import { logger } from "./features/middleware";

export const store = configureStore({
  reducer: {
    data: dataSliceReducers,
  },
  middleware: [logger],
});
