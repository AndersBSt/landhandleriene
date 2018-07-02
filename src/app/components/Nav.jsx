import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
                <div>
                    <Link to="/">Landingpage</Link>
                    <Link to="/evanger">Evanger Landhandleri</Link>
                    <Link to="/kvamskogen">Kvamskogen Landhandleri</Link>
                    <Link to="/tysse">Tysse Landhandleri</Link>
                </div>
        
        );
    }
}