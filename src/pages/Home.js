import React, { useContext } from "react";
import Countries from "../components/countries/Countries";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";
import styled from "styled-components";
import DataContext from "../context/DataContext";

const HomeWrapper = styled.div.attrs((props) => ({
  theme: props.theme || "",
}))`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

export default function Home() {
  const { theme } = useContext(DataContext);
  return (
    <HomeWrapper theme={theme}>
      <Header />
      <Filters />
      <Countries />
    </HomeWrapper>
  );
}
