import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { base, firebaseAuth } from '../../server/firebase/firebase';

import Nav from './Nav'
import Store from './Store';
import Landingpage from './Landingpage';
import Admin from './Admin';
import Footer from './Footer';

import { Loader, Dimmer } from 'semantic-ui-react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            stores: { }
        }
    }

    componentWillMount() {
        this.storesRef = base.syncState('stores', {
            context: this,
            state: 'stores',
            then: () => {this.setState({loading: false})}
        });
    }

    componentDidMount() {
        this.authListerner = firebaseAuth.onAuthStateChanged((user) => {
            if(user){
                this.setState({signedIn: true})
            } else {
                const {signedIn, ...state} = this.state;
                this.setState({state})
            }
        })
    }
    
    componentWillUnmount() {
        base.removeBinding(this.storesRef);
        this.authListerner(); 
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
                            
                            <Route exact path="/" component={Landingpage}/>
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
