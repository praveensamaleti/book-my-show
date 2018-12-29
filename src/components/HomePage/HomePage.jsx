import React from "react";

import TrendSearch from "./TrendSearch";
import HomeMovies from "./HomeMovies";
import './HomePage.css';

class HomePage extends React.Component{
    render(){
        return(
            <div className="homePage">
                <TrendSearch/>
                <HomeMovies/>
            </div>
        );
    }
}
export default HomePage;