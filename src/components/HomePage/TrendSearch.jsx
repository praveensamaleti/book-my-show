import React from "react";

import './TrendSearch.css';

class TrendSearch extends React.Component{
    state = {
        trendSearches : []
    }
    componentDidMount(){
        let URL = null;
        URL = `https://api.themoviedb.org/3/trending/all/day?api_key=07a7f693a056feaeb1004f6d09a98bcc`;
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState( { trendSearches : data.results } ) )
        .catch(error => console.log(error));
    }
    render(){
        return(
            <div className="trend">
                <div>Trending Searches</div>
                <ul className="trendList">
                    {this.state.trendSearches.map(
                        (item) => (
                            <li key={item.id}>
                                {item.original_title}
                                <p>Movies</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            
        );
    }
}
export default TrendSearch;