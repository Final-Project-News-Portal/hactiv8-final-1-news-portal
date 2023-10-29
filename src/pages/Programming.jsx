import FetchData from "../components/FetchData";

const Programming = () => {
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <FetchData
        apiUrl="https://newsapi.org/v2/everything?q=PROGRAMMING&apiKey=04a789c791974fec8efcabd0ab880136"
        title="PROGRAMMING"
      />
    </div>
  );
};

export default Programming;