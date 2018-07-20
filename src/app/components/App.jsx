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
            signedIn: false,
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
                console.log(user)
            } else {
                this.setState({signedIn: false})
            }
        })
    }
    
    componentWillUnmount() {
        base.removeBinding(this.storesRef);
        this.authListerner(); 
    }

    changeText(e) {
        this.setState({
            stores: {[e.target.name]: {...this.state[e.target.name], [e.target.id]: e.target.value}}
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
                            <Route path="/evanger" render={() => <Store changeText={(e) => this.changeText(e)} signedIn={this.state.signedIn} store={this.state.stores.evanger} />}/>
                            <Route path="/kvamskogen" render={() => <Store changeText={(e) => this.changeText(e)} signedIn={this.state.signedIn} store={this.state.stores.kvamskogen}/>}/>
                            <Route path="/tysse" render={() => <Store changeText={(e) => this.changeText(e)} signedIn={this.state.signedIn} store={this.state.stores.tysse}/>}/>
                            <Route path="/admin" render={() => <Admin signedIn={this.state.signedIn}></Admin>} />

                            <Footer signedIn={this.state.signedIn}></Footer> 
                        </div>
                    }
            </Router>
        );
    }
}
