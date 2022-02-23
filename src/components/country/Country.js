import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryWrapper = styled.div`
  max-width: 1280px;
  & .menu {
  }
`;

export default function Country() {
  return (
    <CountryWrapper>
      <div className="country-menu">
        <Link to="/" className="go-back">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="country-content">
        <img src="" alt="imagine" />
        <div className="country-details">
          <div className="country-details_one">
            <h2>Germany 1</h2>
            <p>Population: 45,789,909</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
          <div className="country-details_two">
            <h2>Germany 2</h2>
            <p>Population: 45,789,909</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
          <div className="country-details_three">
            <h2>Germany 3</h2>
            <p>Population: 45,789,909</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
      </div>
    </CountryWrapper>
  );
}
