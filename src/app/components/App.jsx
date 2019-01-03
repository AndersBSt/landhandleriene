import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';

import { base, firebaseAuth } from '../../server/firebase/firebase';

import Nav from './Nav'
import Store from './Store';
import LandingPage from './LandingPage';
import Admin from './Admin';
import Footer from './Footer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        this.homeRef = base.syncState('home', {
            context: this,
            state: 'home'
        });
        this.storesRef = base.syncState('stores', {
            context: this,
            state: 'stores',
            then: () => {this.setState({loading: false})}
        });
    }

    componentDidMount() {
        this.authListerner = firebaseAuth.onAuthStateChanged((user) => {
            if(user){
                this.setState({signedIn: true});
            }
            else if (this.state.signedIn == true) {
                this.setState({
                    signedIn: false
                });
            }
            else {
                const {signedIn, ...state} = this.state;
                this.setState({state});
            }
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.storesRef);
        this.authListerner();
    }

    updateHome(homeContent) {
        this.setState({
            home: homeContent
        });
    }

    updateStore(storeContent) {
        this.setState({
            stores: { ...this.state.stores, [storeContent.storeId]: storeContent}
        });
    }

    render() {
        return (
            <Router>
                {this.state.loading ?
                    <Dimmer active>
                        <Loader />
                    </Dimmer> :
                        <div>
                            <Nav signedIn={this.state.signedIn}></Nav>

                            <Route exact path="/" render={() => <LandingPage signedIn={this.state.signedIn} home={this.state.home} updateHome={(homeContent) => this.updateHome(homeContent)} />}/>
                            <Route path="/evanger" render={() => <Store signedIn={this.state.signedIn} store={this.state.stores.evanger} updateStore={(storeContent) => this.updateStore(storeContent)} />}/>
                            <Route path="/kvamskogen" render={() => <Store signedIn={this.state.signedIn} store={this.state.stores.kvamskogen} updateStore={(storeContent) => this.updateStore(storeContent)} />}/>
                            <Route path="/tysse" render={() => <Store signedIn={this.state.signedIn} store={this.state.stores.tysse} updateStore={(storeContent) => this.updateStore(storeContent)} />}/>
                            <Route path="/admin" render={() => <Admin signedIn={this.state.signedIn} />} />

                            <Footer signedIn={this.state.signedIn}></Footer>
                        </div>
                }
            </Router>
        );
    }
}