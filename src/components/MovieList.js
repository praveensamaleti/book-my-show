import React from "react";
import { connect } from "react-redux";
import Movie from './Movies';
import './MovieList.css';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return { movies: state.movies };
};
const MovieList = ({ movies }) => (
  <ul className="App-MovieList">
    {movies.map(movie => (
      <li className="App-MovieItem" key={movie.id}>
        <Link to={`/MovieDesc/${movie.id}`}><Movie movie={movie}/></Link>
      </li>
    ))}
  </ul>
);
export default connect(mapStateToProps)(MovieList);