import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 4em;
  color: white;
  & > div {
    align-items: center;
    display: flex;
    possition: absolute;
    & > .fa-magnifying-glass {
      position: relative;
      border: 1px solid grey;
      border-right: none;
      border-radius: 4px 0 0 4px;
      background: transparent;
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
      background: transparent;
      color: white;
      width: 160px;
      transition: width 2s;
      &:hover {
        width: 200px;
      }
    }
  }
  & > select {
    background: transparent;
    margin: 0;
    padding: 0.5em 1em;
    border-radius: 3px;
    font-size: 0.8em;
    outline: none;
    width: 12em;
    color: darkgrey;
    font-weight: 700;
    cursor: pointer;
    & option {
      background-color: #091221db;
      font-size: 1em;
      color: white;
      cursor: pointer;
    }
  }
`;

export default function Filters() {
  return (
    <FilterWrapper>
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          id="search"
          type="text"
          placeholder=" Search for a country.."
          autoComplete="off"
        />
      </div>
      <select type="select">
        <option value="" defaultValue disabled hidden>
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
