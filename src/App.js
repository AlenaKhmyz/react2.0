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
import CheckboxPage  from './pages/checkbox'
import PlayerPage  from './pages/player'
import AnimatedPage from './pages/animated'
import AnimePage from './pages/anime'
import DropDownPage from './pages/dropDown'
import MenuPage from './pages/menu'

function App() {
  return (
    <BrowserRouter>
            <nav className = 'navbar'>
                <Link to = {ROUTES.MAIN} className = 'link'>Main</Link>
                <Link to = {ROUTES.SETSTATE} className ='link'>Set State</Link>
                <Link to = {ROUTES.PROPS} className ='link'>Props</Link>
                <Link to = {ROUTES.BOOLEAN} className ='link'>Boolean</Link>
                <Link to = {ROUTES.LIST} className ='link'>List</Link>
                <Link to = {ROUTES.CHECKBOX} className ='link'>Checkbox</Link>
                <Link to = {ROUTES.PLAYER} className ='link'>Player</Link>
                <Link to = {ROUTES.ANIMATED} className ='link'>Animated</Link>
                <Link to = {ROUTES.ANIME} className ='link'>Anime</Link>
                <Link to = {ROUTES.DROPDOWN} className ='link'>Drop down</Link>
                <Link to = {ROUTES.MENU} className ='link'>Menu</Link>
            </nav>
            <Switch>
                <Route path={ROUTES.SETSTATE} component={SetStatePage} /> 
                <Route path={ROUTES.PROPS} component={PropsPage} /> 
                <Route path={ROUTES.BOOLEAN} component={BooleanPage} /> 
                <Route path={ROUTES.LIST}  component={ListPage} />
                <Route path={ROUTES.CHECKBOX}  component={CheckboxPage} />
                <Route path={ROUTES.PLAYER}  component={PlayerPage} />
                <Route path={ROUTES.ANIMATED}  component={AnimatedPage} />
                <Route path={ROUTES.ANIME}  component={AnimePage} />
                <Route path={ROUTES.DROPDOWN}  component={DropDownPage} />
                <Route path={ROUTES.MENU}  component={MenuPage} />
                <Route path={ROUTES.MAIN}  component={MainPage} />
            </Switch>
    </BrowserRouter>
  );
}

export default App;
