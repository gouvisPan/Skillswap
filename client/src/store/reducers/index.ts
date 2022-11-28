import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistStore, persistCombineReducers } from "redux-persist";
import userSlice from "./userSlice";
import uiSlice from "./ui-slice";

const persistConfig = {
  key: "root",
  storage,
};

const userReducer = {
  user: userSlice.reducer,
  ui: uiSlice.reducer,
};

const persistedReducer = persistCombineReducers(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
