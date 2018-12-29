import React, { Component } from 'react';
import './App.css';
import store from './store/index';
import { connect } from "react-redux";
import { storeMovies,storeGenres } from './actions/index';
import MainPage from './components/MainPage/MainPage';
import Header from './components/header/Header';

const mapStateToProps = state => {
  return { selectedGenre:state.parameters.selectedGenre };
};
class App extends Component {
  componentDidMount(){
    this.fetchMovies();
    this.fetchGenres();
  }
  componentWillReceiveProps(nextProps){
    if(this.props.selectedGenre !== nextProps.selectedGenre){
      this.fetchMovies();
    }
  }
  fetchMovies(){
    const genreId = this.props.selectedGenre;
    var movieURL = null;
    if(genreId){
      movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=07a7f693a056feaeb1004f6d09a98bcc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;
    }else{
      movieURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=07a7f693a056feaeb1004f6d09a98bcc`;
    }
    fetch(movieURL)
      .then(response => response.json())
      .then(data => store.dispatch(storeMovies(data.results)))
      .catch(error => console.log(error));
  }
  fetchGenres(){
    const genreList = `https://api.themoviedb.org/3/genre/movie/list?api_key=07a7f693a056feaeb1004f6d09a98bcc&language=en-US`;
    fetch(genreList)
      .then(response => response.json())
      .then(data => store.dispatch(storeGenres(data.genres)))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className="App-Content">
          
          <MainPage/>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
