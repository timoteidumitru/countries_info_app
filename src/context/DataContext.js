import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useStickyState } from "../hooks/useStickyState";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState({});
  const [changeTheme, setChangeTheme] = useStickyState("darkMode", "themes");

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
  }, [countries, search]);

  useEffect(() => {
    const filteredResults = countries.filter((country) =>
      country.region?.toLowerCase().includes(region.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [countries, region]);

  useEffect(() => {
    const themes = {
      darkMode: {
        background: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
        elements: "hsl(209, 23%, 22%)",
        fontWeight: "400",
      },
      lightMode: {
        background: "hsl(0, 0%, 98%)",
        text: "hsl(200, 15%, 8%)",
        elements: "hsl(0, 0%, 100%)",
        input: "hsl(0, 0%, 52%)",
        fontWeight: "800",
      },
    };
    changeTheme === "lightMode"
      ? setTheme(themes.lightMode)
      : setTheme(themes.darkMode);
  }, [changeTheme]);

  const handleChange = () => {
    setTimeout(() => {
      changeTheme === "lightMode"
        ? setChangeTheme("darkMode")
        : setChangeTheme("lightMode");
    }, 500);
  };

  return (
    <DataContext.Provider
      value={{
        countries,
        search,
        searchResults,
        region,
        theme,
        changeTheme,
        handleChange,
        setRegion,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
