import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const today = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(today.getMonth() - 1);

const from = oneMonthAgo.toISOString().slice(0, 10);
const to = today.toISOString().slice(0, 10);

const apiKey = "50fb6c33c92b4a5a9932ecd5e8916d18";
const apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const apiUrlWithDate = `${apiURL}${apiKey}&from=${from}&to=${to}`;

export const fetchNews = createAsyncThunk("home/fetchNews", async () => {
  try {
    const res = await axios.get(apiUrlWithDate);
    return res.data;
  } catch (err) {
    throw err.message;
  }
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.articles;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
