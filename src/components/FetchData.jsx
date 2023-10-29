import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import PropTypes from "prop-types";
import ButtonSave from "./ButtonSave";

const FetchData = ({ apiUrl, title }) => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Menghitung tanggal awal dan akhir untuk satu bulan ini
        const today = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const from = oneMonthAgo.toISOString().slice(0, 10);
        const to = today.toISOString().slice(0, 10);

        // Menambahkan parameter from dan to ke URL API
        const apiUrlWithDate = `${apiUrl}&from=${from}&to=${to}`;

        console.log("Fetching data from:", apiUrlWithDate);

        const response = await axios.get(apiUrlWithDate);
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newsData ? (
          newsData.map((article, index) => {
            if (article.title && article.title.includes(["Removed"])) {
              return null;
            }
            return (
              <Card
                key={index}
                article={article}
                button={<ButtonSave article={article} />}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

FetchData.propTypes = {
  apiUrl: PropTypes.string,
  title: PropTypes.string,
};

export default FetchData;
