import React, { useContext } from "react";
import Countries from "../components/countries/Countries";
import Filters from "../components/filters/Filters";
import styled from "styled-components";
import DataContext from "../context/DataContext";

const HomeWrapper = styled.div.attrs((props) => ({
  theme: props.theme || "",
}))`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 89.5vh;
`;

export default function Home() {
  const { theme } = useContext(DataContext);
  return (
    <HomeWrapper theme={theme}>
      <Filters />
      <Countries />
    </HomeWrapper>
  );
}
