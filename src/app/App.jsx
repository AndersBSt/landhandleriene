import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Evanger from './components/Evanger';
import Kvamskogen from './components/Kvamskogen';
import Landingpage from './components/Landingpage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Landingpage</Link></li>
                        <li><Link to="/evanger">Evanger Landhandleri</Link></li>
                        <li><Link to="/kvamskogen">Kvamskogen Landhandleri</Link></li>
                    </ul>

                    <Route exact path="/" component={Landingpage}/>
                    <Route path="/evanger" component={Evanger}/>
                    <Route path="/kvamskogen" component={Kvamskogen}/>
                </div>
            </Router>
        );
    }
}
