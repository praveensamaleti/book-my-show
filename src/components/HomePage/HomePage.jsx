import React from "react";

import TrendSearch from "./TrendSearch";
import './HomePage.css';
import HomeMovies from "./HomeMovies";

class HomePage extends React.Component{
    state = {
        movieList : [],
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
            <div className="homePage">
                <TrendSearch/>
                <div>
                    <div className="homeMovies">
                        <div className="movieHeader">
                            <a>Movies</a>
                            <a>view all</a>
                        </div>
                        <HomeMovies movieList={this.state.movieList}/>
                    </div>
                    <div className="homeMovies">
                        <div className="movieHeader">
                            <a>Collections</a>
                            <a>view all</a>
                        </div>
                        <HomeMovies movieList={this.state.movieList}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;