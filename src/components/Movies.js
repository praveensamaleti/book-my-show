import React from 'react';

class Movie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { vote_average , title , popularity , poster_path } = this.props.movie;
        const imgUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;
        return(
                <div>
                    <img src={imgUrl} alt={title}/>
                    <div>
                        <a>{title}</a>
                    </div>
                </div>
            );
    }
}
export default Movie;