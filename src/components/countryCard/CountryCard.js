import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryCardWrapper = styled.div`
  cursor: pointer;
  & > div {
    & > h3 {
      padding: 0 0 0.5em 0;
    }
    & > p {
      font-size: 0.9em;
      & > span {
        color: darkgrey;
      }
    }
  }
`;

export default function CountryCard({ data }) {
  return (
    <Link to="/country/1">
      <CountryCardWrapper>
        <img src={data.flags.png} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>
            Population: <span>{data.population.toLocaleString()}</span>
          </p>
          <p>
            Region: <span>{data.region}</span>
          </p>
          <p>
            Capital: <span>{data.capital}</span>
          </p>
        </div>
      </CountryCardWrapper>
    </Link>
  );
}
