import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Reports from './pages/Reports';
import About from './pages/About';
import Chat from './pages/Chat';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/chat' component={Chat}/>

                    {/* both /roster and /roster/:number begin with /roster */}
                    <Route exact path='/reports' component={Reports}/>
                    <Route path='/reports/:report' component={Reports}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
