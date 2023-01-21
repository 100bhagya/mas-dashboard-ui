import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import appReducer from "./features/app/appSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const userPersistConfig = {
  key: "user-persist",
  storage,
};
const appPersistConfig = {
  key: "app-persist",
  storage,
};
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const appPersistedReducer = persistReducer(appPersistConfig, appReducer);
const rootReducer = combineReducers({
  user: userPersistedReducer,
  app: appPersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
