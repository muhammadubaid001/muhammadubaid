import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';

const Routing: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
}

export default Routing;