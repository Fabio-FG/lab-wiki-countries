// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import countriesData from "./countries.json"

import { Routes, Route } from "react-router-dom";


function App() {
  return <div className="App">

    <Navbar />

    <CountriesList countriesData={countriesData}/>

    <Routes>
      <Route path="/"></Route>

      
    </Routes>
  </div>;
}
export default App;
