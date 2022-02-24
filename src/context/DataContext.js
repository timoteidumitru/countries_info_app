import { createContext, useState, useEffect } from "react";
import axios from "axios";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [totalCount, setTotalCount] = useState(1);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  }, []);

  useEffect(() => {
    const filteredResults = countries.filter(
      (country) =>
        country.name?.toLowerCase().includes(search.toLowerCase()) ||
        country.capital?.toLowerCase().includes(search.toLowerCase()) ||
        country.region?.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults);
    // setTotalCount(filteredResults.length);
  }, [countries, search]);

  useEffect(() => {
    const filteredResults = countries.filter((country) =>
      country.region?.toLowerCase().includes(region.toLowerCase())
    );
    setSearchResults(filteredResults);
    // setTotalCount(filteredResults.length);
  }, [countries, region]);

  // console.log(totalCount);

  return (
    <DataContext.Provider
      value={{
        countries,
        search,
        searchResults,
        region,
        setRegion,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
