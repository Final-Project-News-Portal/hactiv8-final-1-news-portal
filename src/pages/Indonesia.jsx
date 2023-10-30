import FetchData from "../components/FetchData";

const Indonesia = () => {
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <FetchData
        apiUrl="https://newsapi.org/v2/top-headlines?country=id&apiKey=50fb6c33c92b4a5a9932ecd5e8916d18"
        title="INDONESIA"
      />
    </div>
  );
};

export default Indonesia;
