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

    handleBurgerClick(e) {
        let nav = document.querySelector('.nav');
        nav.classList.toggle('nav-hidden');
    }


    render() {
        return (
                <div className="nav-container">
                    <div className="burger" onClick={() => this.handleBurgerClick() }>burger</div>
                    <div className="nav nav-hidden">
                        <Container>
                            <div className="nav-item-container">
                                <NavLink exact className="nav-item" activeClassName="active" to="/">Hjem</NavLink>
                                <NavLink className="nav-item" activeClassName="active" to="/evanger">Evanger Landhandleri</NavLink>
                                <NavLink className="nav-item" activeClassName="active" to="/kvamskogen">Kvamskogen Landhandleri</NavLink>
                                <NavLink className="nav-item" activeClassName="active" to="/tysse">Tysse Landhandleri</NavLink>
                                {this.props.signedIn ? <button className="nav-btn" onClick={signOut}>Logg ut</button> : ''}
                            </div>
                        </Container>
                    </div>
                </div>
        
        );
    }
}

