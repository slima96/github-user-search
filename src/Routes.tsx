import Home from 'pages/Home';
import Search from 'pages/Search';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';

const Routes = () => {  
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search" exact>
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;