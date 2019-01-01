import React from "react";

import './MoviesPagination.css';
import Movie from './Movie';
import leftArrow from '../../icons/leftArrow.png';
import rightArrow from '../../icons/rightArrow.png';

class MoviesPagination extends React.Component{
    state = {
        movieList : [],
        pageNumber : 0
    }
    componentDidMount(){
        let URL = null;
        URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=07a7f693a056feaeb1004f6d09a98bcc&language=en-US&page=1`;
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState( { movieList : data.results } ) )
        .catch(error => console.log(error));
    }
    handleLeftArrow = () => {
        this.setState(function(state) {
            return {
                pageNumber : state.pageNumber - 1
            };
        });
    }
    handlRightArrow = () => {
        this.setState(function(state){
            return {
                pageNumber : state.pageNumber + 1
            }
        })
    }
    render(){
        let originalList = this.state.movieList;
        let listSize = originalList.length ;
        let startIndex = this.state.pageNumber ;
        let endIndex = startIndex + 4 ;
        let movieList = originalList.slice(startIndex,endIndex);

        let leftImage = <img src={leftArrow} alt="" onClick={ () => this.handleLeftArrow() }/>;
        let rightImage = <img src={rightArrow} alt="" onClick={ () => this.handlRightArrow() }/>;
        return(
            <div className="homeMovies">
                <div>Movies</div>
                { startIndex !== 0 && leftImage }
                <div className="movieList">
                    {movieList.map(
                            (item) => (
                                <a key={item.id}>
                                    <Movie movie={item}/>
                                </a>
                            )
                        )}
                </div>
                { endIndex !== listSize && rightImage }
            </div>
        );
    }
}
export default MoviesPagination;