import React from "react";

import './HomeMovies.css';
import Movie from './Movie';

class HomeMovies extends React.Component{
    state = {
        movieList : []
    }
    componentDidMount(){
        let URL = null;
        URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=07a7f693a056feaeb1004f6d09a98bcc&language=en-US&page=1`;
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState( { movieList : data.results } ) )
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div className="homeMovies">
                <div>Movies</div>
                <ul className="movieList">
                    {this.state.movieList.map(
                            (item) => (
                                <li key={item.id}>
                                    <Movie movie={item}/>
                                </li>
                            )
                        )}
                </ul>
            </div>
        );
    }
}
export default HomeMovies;