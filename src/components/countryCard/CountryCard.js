import React from "react";
import styled from "styled-components";

const CountryCardWrapper = styled.div``;

export default function CountryCard({ data }) {
  return (
    <CountryCardWrapper>
      <img src={data.flags.png} alt={data.name} />
      {/* <div className="country-flag"></div> */}
      <div>
        <h3>{data.name}</h3>
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Capital: {data.capital}</p>
      </div>
    </CountryCardWrapper>
  );
}
