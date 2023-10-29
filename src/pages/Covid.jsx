import FetchData from "../components/FetchData";


const Covid = () => {
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10" >
        <FetchData
        apiUrl="https://newsapi.org/v2/everything?q=COVID-19&apiKey=04a789c791974fec8efcabd0ab880136"
        title="COVID-19"
      />
    </div>
  );
};

export default Covid;