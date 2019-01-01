import React from "react";

import TrendSearch from "./TrendSearch";
import './HomePage.css';
import MoviesPagination from "./MoviesPagination";

class HomePage extends React.Component{
    render(){
        return(
            <div className="homePage">
                <TrendSearch/>
                <MoviesPagination/>
            </div>
        );
    }
}
export default HomePage;