import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Done from './pages/Done';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point" />
            <Route component={Done} path="/done" />
        </BrowserRouter>
    );
}

export default Routes;

