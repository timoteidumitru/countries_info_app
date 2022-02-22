import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./components/country/Country";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
