import React from "react";

import Pagination from '../../HOC/Pagination.jsx';
import Movie from './Movie.jsx';

class HomeMovies extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="movieList">
                {this.props.list.map(
                        (item) => (
                            <a key={item.id}>
                                <Movie movie={item}/>
                            </a>
                        )
                    )}
            </div>
        );
    }
}
export default Pagination(HomeMovies);