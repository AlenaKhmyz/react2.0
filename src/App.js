import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import { ROUTES } from './const'
import React from 'react';
import MainPage from './pages/Main/index.js'
import SetStatePage from './pages/setState/index.js'
import PropsPage from './pages/props/index.js'
import BooleanPage from './pages/boolean/index.js'
import ListPage from './pages/list'

function App() {
  return (
    <BrowserRouter>
            <nav className = 'navbar'>
                <Link to = {ROUTES.MAIN} className = 'link'>Main</Link>
                <Link to = {ROUTES.SETSTATE} className ='link'>Set State</Link>
                <Link to = {ROUTES.PROPS} className ='link'>Props</Link>
                <Link to = {ROUTES.BOOLEAN} className ='link'>Boolean</Link>
                <Link to = {ROUTES.LIST} className ='link'>List</Link>
            </nav>
            <Switch>
                <Route path={ROUTES.SETSTATE} component={SetStatePage} /> 
                <Route path={ROUTES.PROPS} component={PropsPage} /> 
                <Route path={ROUTES.BOOLEAN} component={BooleanPage} /> 
                <Route path={ROUTES.LIST}  component={ListPage} />
                <Route path={ROUTES.MAIN}  component={MainPage} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;