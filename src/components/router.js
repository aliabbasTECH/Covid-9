import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import  About from '../screens/about'
import  Home from '../screens/home'
import  Contact from '../screens/contact'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;