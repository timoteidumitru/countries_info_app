import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Country from "./components/country/Country";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
