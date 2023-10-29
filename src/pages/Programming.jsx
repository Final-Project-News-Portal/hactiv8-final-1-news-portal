import FetchData from "../components/FetchData";

const Programming = () => {
  return (
    <div>
      <FetchData
        apiUrl="https://newsapi.org/v2/everything?q=PROGRAMMING&apiKey=04a789c791974fec8efcabd0ab880136"
        title="PROGRAMMING"
      />
    </div>
  );
};

export default Programming;