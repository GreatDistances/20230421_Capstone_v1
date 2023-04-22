import NavBar from "./Components/NavBar/NavBar.js";
import Footer from "./Components/Footer/Footer.js";
import FeaturedMovies from "./Components/Homepage/FeaturedMovies.js";
import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCardApp from "./Components/MovieCard/MovieCardApp.js";
import ReactPaginate from "react-paginate";
import BrowseAllTitles from "./Components/Homepage/BrowseAllTitles.js";

function App() {
  return (
    <div className="body">
      <NavBar />
      <FeaturedMovies />
      <MovieCardApp />
      <Footer />
    </div>
  );
}

export default App;
