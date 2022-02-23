import React from "react";
import Countries from "../components/countries/Countries";
import Filters from "../components/filters/Filters";

export default function Home() {
  return (
    <div>
      <Filters />
      <Countries />
    </div>
  );
}
