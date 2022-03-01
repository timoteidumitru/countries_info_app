import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DataContext from "../../context/DataContext";

const CountryCardWrapper = styled.div.attrs((props) => ({
  theme: props.theme || "",
}))`
  cursor: pointer;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  & > div {
    & > p {
      font-size: 0.9em;
      & > span {
        color: darkgrey;
      }
    }
  }
`;

const HeaderText = styled.h3.attrs((props) => ({
  textSize: props.textSize || "19",
}))`
  font-size: ${(props) => (props?.textSize > 18 ? "0.9em" : "1.17em")};
  padding: ${(props) => (props?.textSize > 18 ? "0" : "0 0 0.5em 0")};
`;

export default function CountryCard({ data }) {
  const { theme } = useContext(DataContext);
  return (
    <Link to={`/country/${data.name}`}>
      <CountryCardWrapper theme={theme}>
        <img src={data.flags.png} alt={data.name} />
        <div>
          <HeaderText textSize={data.name.length}>{data.name}</HeaderText>
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
