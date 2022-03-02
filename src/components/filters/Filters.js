import React, { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../context/DataContext";

const FilterWrapper = styled.div.attrs((props) => ({
  theme: props.theme || "",
}))`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 4em;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  max-width: 1280px;
  margin: 0 auto;
  & > div {
    align-items: center;
    display: flex;
    possition: absolute;
    box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
    & > .fa-magnifying-glass {
      position: relative;
      border: none;
      border-right: none;
      border-radius: 4px 0 0 4px;
      background-color: ${(props) => props.theme.elements};
      padding: 14.8px;
    }
    & > input {
      margin: 0;
      padding: 1em 2em;
      border-radius: 3px;
      outline: none;
      border: none;
      border-left: none;
      border-radius: 0 4px 4px 0;
      background-color: ${(props) => props.theme.elements};
      color: ${(props) => props.theme.text};
      width: 180px;
      transition: width 2s;
      &:hover {
        width: 220px;
      }
      ::placeholder {
        color: ${(props) => props.theme.text};
      }
    }
  }
  & > select {
    background-color: ${(props) => props.theme.elements};
    margin: 0;
    padding: 1em 2em;
    border-radius: 3px;
    border: none;
    font-size: 0.8em;
    outline: none;
    width: 13em;
    color: ${(props) => props.theme.text};
    font-weight: 700;
    cursor: pointer;
    box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
    & option {
      background-color: ${(props) => props.theme.elements};
      font-size: 1em;
      color: ${(props) => props.theme.text};
      cursor: pointer;
    }
  }
  @media (max-width: 412px) {
    display: block;
    width: 96vw;
    padding: 1em;
    padding-top: 4em;
    margin: 0;

    & > div {
      & > .search-input_icon {
        padding: 0.9em;
      }
      & > .search-input {
        width: 100%;
        padding: 1em;
      }
    }
    & > select {
      margin-top: 2em;
      padding: 1.2em;
    }
  }
`;

export default function Filters() {
  const { search, setSearch, setRegion, theme } = useContext(DataContext);

  // handle region filter
  function handleAddrTypeChange(e) {
    setRegion(e.target.value);
  }

  return (
    <FilterWrapper theme={theme}>
      <div>
        <i className="fa-solid fa-magnifying-glass search-input_icon"></i>
        <input
          id="search"
          className="search-input"
          type="text"
          placeholder=" Search for a country.."
          autoComplete="off"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <select
        type="select"
        defaultValue={"DEFAULT"}
        onChange={handleAddrTypeChange}
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
