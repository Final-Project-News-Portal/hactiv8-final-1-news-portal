import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const today = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(today.getMonth() - 1);

const from = oneMonthAgo.toISOString().slice(0, 10);
const to = today.toISOString().slice(0, 10);

const apiKey = "50fb6c33c92b4a5a9932ecd5e8916d18";
const apiURL = "https://newsapi.org/v2/everything?q=PROGRAMMING&apiKey=";
const apiUrlWithDate = `${apiURL}${apiKey}&from=${from}&to=${to}`;

const programmingSlice = createSlice({
  name: "programming",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgrammingNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProgrammingNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.articles;
      })
      .addCase(fetchProgrammingNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchProgrammingNews = createAsyncThunk(
  "programming/fetchProgrammingNews",
  async () => {
    try {
      const res = await axios.get(apiUrlWithDate);
      return res.data;
    } catch (err) {
      throw err.message;
    }
  }
);

export default programmingSlice.reducer;
