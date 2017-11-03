import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import About from "./pages/About";

import '../css/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>

                    {/* both /roster and /roster/:number begin with /roster */}
                    <Route path='/report' component={Report}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
