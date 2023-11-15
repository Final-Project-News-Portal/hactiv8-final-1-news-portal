import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = "savedItems";
const savedNewsSlice = createSlice({
  name: "savedNews",
  initialState: {
    news: [],
  },
  reducers: {
    addNews: (state, action) => {
      const newArticle = action.payload;
      if (!state.news.some((article) => article.title === newArticle.title)) {
        state.news.push(newArticle);
        localStorage.setItem(localStorageKey, JSON.stringify(state.news));
      }
    },
    removeNews: (state, action) => {
      const articleToRemove = action.payload;
      state.news = state.news.filter(
        (savedArticle) => savedArticle.title !== articleToRemove.title
      );
      localStorage.setItem(localStorageKey, JSON.stringify(state.news));
    },
  },
});

export const { addNews, removeNews } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;
