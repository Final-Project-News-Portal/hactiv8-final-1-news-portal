import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const today = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(today.getMonth() - 1);

const from = oneMonthAgo.toISOString().slice(0, 10);
const to = today.toISOString().slice(0, 10);

const apiKey = "50fb6c33c92b4a5a9932ecd5e8916d18";
const apiURL = "https://newsapi.org/v2/everything?q=COVID-19&apiKey=";
const apiUrlWithDate = `${apiURL}${apiKey}&from=${from}&to=${to}`;

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCovidNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.articles;
      })
      .addCase(fetchCovidNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchCovidNews = createAsyncThunk(
  "covid/fetchCovidNews",
  async () => {
    try {
      const res = await axios.get(apiUrlWithDate);
      return res.data;
    } catch (err) {
      throw err.message;
    }
  }
);

export default covidSlice.reducer;
