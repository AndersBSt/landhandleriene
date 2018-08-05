import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../server/firebase/firebase';

import { Container } from 'semantic-ui-react';
import './Nav.css';

import logo from '../img/Logo.svg';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick)
    }

    handleBurgerClick(e) {
        let nav = document.querySelector('.nav');
        let burger = document.querySelector('.hamburger')
        nav.classList.toggle('is-active');
        burger.classList.toggle('is-active')
    }

    handleOutsideClick(e) {
        let outside = true; 
        let nav = document.querySelector('.nav');
        let burger = document.querySelector('.hamburger')

        for(let i = 0; i < e.path.length - 2; i++) {
            if(e.path[i].classList.contains('nav-container') ) {
                outside = false; 
            } 
        }

        if(outside && !nav.classList.contains('nav-hidden')) {
            nav.classList.remove('is-active');
            burger.classList.remove('is-active');
        }
    }


    render() {
        return (
                <div className="nav-container">
                    <div className="hamburger hamburger--squeeze mobile" onClick={() => this.handleBurgerClick() }>
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>

                    <div className="nav">
                        <Container>
                            <div className="nav-item-container">
                                <img className="nav-logo" src={logo} />
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
