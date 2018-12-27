import React from 'react';
import bms from '../../icons/bms.png';
import menu from '../../icons/menu.png';

import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="headerContainer">
                <img src={bms} className="bms"/>
                <div>
                    <div>
                        <input type="search" placeholder="Search for Movies, Events, Plays and Sports" 
                            className="searchBar"/>
                    </div>
                    <div className="navBar">
                        <div className="navBarA">
                            <a>Movies</a>
                            <a>Events</a>
                            <a>Plays</a>
                            <a>Sports</a>
                            <a>Monuments</a>
                            <a>Activities</a>
                        </div>
                        <div className="navBarB">
                        <a>Corporates</a>
                        <a>Offers</a>
                        <a>Gift Cards</a>
                        <a>Hyderabad</a>
                        <a>English</a>
                    </div>
                    </div>
                    
                </div>
                <input className="login" type="button" value="Sign In"/>
                <img src={menu} className="menu"/>
                <div>
                    
                </div>
            </div>
        );
    }

}
export default Header;