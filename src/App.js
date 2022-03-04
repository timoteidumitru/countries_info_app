import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Home from "./pages/Home";
import Country from "./components/country/Country";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          {/* <Route path="/" exact element={<Home />} />
          <Route path="/country/:id" element={<Country />} /> */}
          <Route path="/countries_info_app/" exact element={<Home />} />
          <Route path="/countries_info_app/country/:id" element={<Country />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
