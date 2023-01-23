import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import appReducer from "./features/app/appSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import themeReducer from "./features/theme/themeSlice";
const userPersistConfig = {
  key: "user-persist",
  storage,
};
const themePersistConfig = {
  key: "theme-persist",
  storage,
};
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const themePersistedReducer = persistReducer(themePersistConfig, themeReducer);
const rootReducer = combineReducers({
  user: userPersistedReducer,
  app: appReducer,
  theme: themePersistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
