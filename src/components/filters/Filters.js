import React, { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../context/DataContext";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 4em;
  color: hsl(0, 0%, 100%);
  max-width: 1280px;
  margin: 0 auto;
  & > div {
    align-items: center;
    display: flex;
    possition: absolute;
    box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
    & > .fa-magnifying-glass {
      position: relative;
      border: 1px solid grey;
      border-right: none;
      border-radius: 4px 0 0 4px;
      background-color: #3d3951;
      padding: 7px;
    }
    & > input {
      background: #091221db;
      margin: 0;
      border: 0;
      padding: 0.5em 1em;
      border-radius: 3px;
      outline: none;
      border: 1px solid grey;
      border-left: none;
      border-radius: 0 4px 4px 0;
      background-color: #3d3951;
      color: hsl(0, 0%, 100%);
      width: 160px;
      transition: width 2s;
      &:hover {
        width: 200px;
      }
      ::placeholder {
        color: hsl(0, 0%, 100%);
      }
    }
  }
  & > select {
    background-color: #3d3951;
    margin: 0;
    padding: 0.5em 1em;
    border-radius: 3px;
    font-size: 0.8em;
    outline: none;
    width: 12em;
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
    & option {
      background-color: #3d3951;
      font-size: 1em;
      color: hsl(0, 0%, 100%);
      cursor: pointer;
    }
  }
`;

export default function Filters() {
  const { search, setSearch, setRegion } = useContext(DataContext);

  function handleAddrTypeChange(e) {
    setRegion(e.target.value);
  }

  return (
    <FilterWrapper>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          id="search"
          type="text"
          placeholder=" Search for a country.."
          autoomplete="off"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <select
        type="select"
        defaultValue={"DEFAULT"}
        onChange={handleAddrTypeChange}
        // value={region}
      >
        <option value={"DEFAULT"} disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </FilterWrapper>
  );
}
