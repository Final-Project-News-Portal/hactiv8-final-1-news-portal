import { configureStore } from "@reduxjs/toolkit";
import covidReducers from "./reducers/covid";
import indonesiaReducers from "./reducers/indonesia";
import programmingReducers from "./reducers/programming";
import homeReducers from "./reducers/home";
import savedNewsReducers from "./reducers/save";

const store = configureStore({
  reducer: {
    covid: covidReducers,
    indonesia: indonesiaReducers,
    programming: programmingReducers,
    home: homeReducers,
    savedNews: savedNewsReducers,
  },
});

export default store;
