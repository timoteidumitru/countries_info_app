import styled from "styled-components";
import React, { useContext, useState, useMemo } from "react";
import DataContext from "../../context/DataContext";
import CountryCard from "../countryCard/CountryCard";
import Pagination from "../pagination/Pagination";

const CountriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
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
let PageSize = 8;

export default function Countries() {
  const { searchResults } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return searchResults.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, searchResults]);

  return (
    <CountriesWrapper>
      {currentTableData.map((country, i) => (
        <CountryCard data={country} key={country.name} />
      ))}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={searchResults.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </CountriesWrapper>
  );
}
