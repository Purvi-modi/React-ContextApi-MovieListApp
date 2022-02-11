import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h3>Movies List App</h3>
        <p>List of movies : {movies.length}</p>
      </div>
    </nav>
  );
};

export default Nav;
