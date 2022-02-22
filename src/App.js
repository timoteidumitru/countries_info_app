import "./App.css";
import Countries from "./components/countries/Countries";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Countries />
    </div>
  );
}

export default App;
