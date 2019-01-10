import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

class MainPage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default MainPage;