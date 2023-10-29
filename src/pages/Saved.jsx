import { useState, useEffect } from "react";
import Card from "../components/Card";

function Saved() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Ambil daftar artikel yang sudah disimpan dari localStorage saat komponen dimuat
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(savedArticles);
  }, []);

  const handleDelete = (index) => {
    // Hapus artikel dari daftar yang tersimpan
    const updatedSavedArticles = [...savedArticles];
    updatedSavedArticles.splice(index, 1);
    // Simpan kembali daftar artikel yang sudah diperbarui
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
    setSavedArticles(updatedSavedArticles);
  };

  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
        Saved
      </h1>
      {savedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {savedArticles.map((article, index) => (
            <Card
              key={index}
              article={article}
              button={
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white rounded items-center h-auto w-14 hover:bg-red-800 transition duration-300"
                >
                  Delete
                </button>
              }
            />
          ))}
        </div>
      ) : (
        <p>No News Saved...</p>
      )}
    </div>
  );
}

export default Saved;
