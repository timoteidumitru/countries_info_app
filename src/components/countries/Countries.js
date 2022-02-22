import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountryCard from "../countryCard/CountryCard";

const CountriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  max-width: 1280px;
  & a {
    margin: 1em;
    min-width: 175px;
    max-width: 175px;
    background-color: hsl(209, 23%, 22%);
    color: hsl(0, 0%, 100%);
    text-decoration: none;
    border-radius: 0 0 5px 5px;
    min-height: 240px;
    box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
    & > div {
      & > img {
        height: 110px;
        width: 100%;
      }
      & > div {
        padding: 0.5em;
      }
    }
  }
`;
export default function Countries() {
  const [countries, setCountries] = useState([]);

  // get data from API
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

  return (
    <CountriesWrapper>
      {countries?.map((country, i) => (
        <CountryCard data={country} key={i} />
      ))}
    </CountriesWrapper>
  );
}
