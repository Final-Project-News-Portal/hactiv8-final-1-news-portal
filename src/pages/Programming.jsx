import FetchData from "../components/FetchData";

const Programming = () => {
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <FetchData
        apiUrl="https://newsapi.org/v2/everything?q=PROGRAMMING&apiKey=50fb6c33c92b4a5a9932ecd5e8916d18"
        title="PROGRAMMING"
      />
    </div>
  );
};

export default Programming;
