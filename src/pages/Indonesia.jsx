import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIndonesiaNews } from "../store/reducers/indonesia";

import Card from "../components/Card";
const Covid = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.indonesia);

  useEffect(() => {
    dispatch(fetchIndonesiaNews());
  }, [dispatch]);
  return (
    <div className="ml-10 mr-10 mx-auto p-4 mt-10">
      <div className="ml-10 mr-10 mx-auto p-4 mt-20">
        <h1 className="mt-10 mb-0 text-3xl font-bold tracking-tight md:mt-16 xl:mt-16 text-left">
          Indonesia
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            data.map((articles, index) => (
              <Card key={index} article={articles} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Covid;
