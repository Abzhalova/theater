import { configureStore } from "@reduxjs/toolkit";
import posterReducer from "./slices/posterSlices";
import repertoireSlice from "./slices/repertoireSlice";

export const store = configureStore({
  reducer: {
    poster: posterReducer,
    repertoireReducer: repertoireSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
