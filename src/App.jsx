import { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import ShowTable from "./components/ShowTable";
import axiosMain from "./axios";
import "./App.css";

function App() {
  const [allData, setAllData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const getApiData = async (searchedValue) => {
    setIsloading(true);
    try {
      var options = {
        method: "GET",
        url: "/geo/cities",
        params: {
          countryIds: "IN",
          namePrefix: searchedValue,
          limit: limit,
          offset: offset,
        },
        headers: {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY, // get key from https://rapidapi.com/wirefreethought/api/geodb-cities/
        },
      };

      const res = await axiosMain(options);

      setAllData(res.data);
      setIsloading(false);
    } catch (error) {
      console.log("getApiData error", error);

      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  // fetch data on initial
  useEffect(() => {
    getApiData();
  }, [offset, limit]);

  return (
    <div className="App">
      <SearchBox getApiData={getApiData} />
      <ShowTable
        allData={allData}
        isLoading={isLoading}
        limit={limit}
        setOffset={setOffset}
        setLimit={setLimit}
        offset={offset}
      />
      <div className="error">{error && <span>Error: {error}</span>}</div>
    </div>
  );
}

export default App;
