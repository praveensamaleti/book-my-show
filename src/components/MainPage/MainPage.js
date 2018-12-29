import React from 'react';
import MovieList from '../MovieList';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import MovieDesc from './MovieDesc';
import HomePage from '../HomePage/HomePage';

class MainPage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/MovieDesc/:movieID' component={MovieDesc}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default MainPage;