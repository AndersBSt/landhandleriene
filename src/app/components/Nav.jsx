import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../server/firebase/firebase';

import { Container } from 'semantic-ui-react';
import './Nav.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
                <div className="nav">
                    <Container>
                        <div className="nav-container">
                            <NavLink exact className="nav-item" activeClassName="active" to="/">Home</NavLink>
                            <NavLink className="nav-item" activeClassName="active" to="/evanger">Evanger Landhandleri</NavLink>
                            <NavLink className="nav-item" activeClassName="active" to="/kvamskogen">Kvamskogen Landhandleri</NavLink>
                            <NavLink className="nav-item" activeClassName="active" to="/tysse">Tysse Landhandleri</NavLink>
                            {this.props.signedIn ? <button className="nav-btn" onClick={signOut}>Logg ut</button> : ''}
                        </div>
                    </Container>
                </div>
        
        );
    }
}