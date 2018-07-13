import { h, Component } from 'preact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { base } from '../../server/firebase/firebase';

import Nav from './Nav'
import Store from './Store';
import Landingpage from './Landingpage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: true,
            stores: {
                evanger: {},
                kvamskogen: {},
                tysse: {}
            }
        }
    }

    componentWillMount() {
        this.storesRef = base.syncState('stores', {
            context: this,
            state: 'stores'
        });
    }
    
    componentWillUnmount() {
        base.removeBinding(this.storesRef);
    }

    changeStore(e) {
        this.setState({
            stores: {[e.target.name]: {...this.state[e.target.name], [e.target.id]: e.target.value}}
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav></Nav>
                    <Route exact path="/" component={Landingpage}/>
                    <Route path="/evanger" render={() => <Store changeStore={(e) => this.changeStore(e)} signedIn={this.state.signedIn} store={this.state.stores.evanger} />}/>
                    <Route path="/kvamskogen" render={() => <Store changeStore={(e) => this.changeStore(e)} signedIn={this.state.signedIn} store={this.state.stores.kvamskogen}/>}/>
                    <Route path="/tysse" render={() => <Store changeStore={(e) => this.changeStore(e)} signedIn={this.state.signedIn} store={this.state.stores.tysse}/>}/>
                </div>
            </Router>
        );
    }
}
