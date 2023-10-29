/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ButtonSave = ({ article }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Periksa apakah artikel sudah disimpan dalam localStorage saat komponen diinisialisasi
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isArticleSaved = savedArticles.some(
      (savedArticle) => savedArticle.title === article.title
    );
    setIsSaved(isArticleSaved);
  }, [article.title]);

  const toggleSaved = () => {
    if (!isSaved) {
      //menyimpan artikel ke penyimpanan global
      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      savedArticles.push(article);
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    } else {
      //menghapus artikel dari penyimpanan global

      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      const updatedSavedArticles = savedArticles.filter(
        (savedArticle) => savedArticle.title !== article.title
      );
      localStorage.setItem(
        "savedArticles",
        JSON.stringify(updatedSavedArticles)
      );
    }

    // Ubah status penyimpanan
    setIsSaved(!isSaved);
  };

  return (
    <button
      onClick={toggleSaved}
      className={`ml-2 ${
        isSaved
          ? "bg-red-500 text-white rounded items-center h-auto w-14 hover:bg-red-800"
          : "bg-blue-500 text-white rounded items-center h-auto w-12 hover:bg-blue-800"
      } transition-all duration-300`}
    >
      {isSaved ? "Saved" : "Save"}
    </button>
  );
};

export default ButtonSave;
