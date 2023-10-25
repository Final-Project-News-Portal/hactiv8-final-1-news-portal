import { useState, useEffect } from "react";

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
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Berita yang Tersimpan</h1>
      {savedArticles.length > 0 ? (
        <ul>
          {savedArticles.map((article, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada berita yang tersimpan.</p>
      )}
    </div>
  );
}

export default Saved;
