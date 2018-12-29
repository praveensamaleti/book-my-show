import React from 'react';
import bms from '../../icons/bms.png';
import menu from '../../icons/menu.png';

import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className="headerContainer">
                <img src={bms} alt="" className="bms"/>
                <div>
                    <div>
                        <input type="search" placeholder="Search for Movies, Events, Plays and Sports" 
                            className="searchBar"/>
                    </div>
                    <div className="navBar">
                        <div className="navBarA">
                            <a href="#">Movies</a>
                            <a href="#">Events</a>
                            <a href="#">Plays</a>
                            <a href="#">Sports</a>
                            <a href="#">Monuments</a>
                            <a href="#">Activities</a>
                        </div>
                        <div className="navBarB">
                            <a href="#">Corporates</a>
                            <a href="#">Offers</a>
                            <a href="#">Gift Cards</a>
                            <a href="#">Hyderabad</a>
                            <a href="#">English</a>
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