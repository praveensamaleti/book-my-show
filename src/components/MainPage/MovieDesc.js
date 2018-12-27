import React from 'react';

class MovieDesc extends React.Component{
    fetchMovieDetails(){
        const movieID = this.props.match.params.movieID;
        const movieDetURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=07a7f693a056feaeb1004f6d09a98bcc&language=en-US`;
        fetch(movieDetURL)
            .then(response => response.json())
            .then(data => this.mapData(data))
            .catch(error => console.log(error));
    }
    mapData(data){

        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w185/${data.backdrop_path}`} alt/>
            </div>
        );
    }
    render(){
        return(
            <div>{this.fetchMovieDetails}</div>
        );
    }
}
export default MovieDesc;