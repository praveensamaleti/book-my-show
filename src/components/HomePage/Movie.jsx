import React from "react";

import heart from '../../icons/heart.png';
import './Movie.css';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let movie = this.props.movie;
        const { vote_average , title , poster_path } = this.props.movie;
        const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;
        return(
            <div className="movie">
                <div className="image"><img src={imgUrl} alt="" /></div>
                <div className="details">
                    <div className="rating">
                        <img src={heart} alt=""/>
                        <div >{vote_average*10}{`%`}</div>
                    </div>
                    <div  className="desc">
                        <div>{title}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;