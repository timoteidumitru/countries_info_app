import React from "react";
import Countries from "../components/countries/Countries";
import Filters from "../components/filters/Filters";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Filters />
      <Countries />
    </div>
  );
}
