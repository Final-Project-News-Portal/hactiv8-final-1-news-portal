import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import covidReducers from "./reducers/covid";
import indonesiaReducers from "./reducers/indonesia";
import programmingReducers from "./reducers/programming";
import homeReducers from "./reducers/home";
import savedNewsReducers from "./reducers/save";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  covid: covidReducers,
  indonesia: indonesiaReducers,
  programming: programmingReducers,
  home: homeReducers,
  savedNews: savedNewsReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
