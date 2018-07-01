import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Store from './components/Store';
import Landingpage from './components/Landingpage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            evanger: {
                storeId: 'evanger',
                storeName: 'Evanger Landhandleri',
                header: 'Hos oss får du det du trenger og litt til',
                content1: 'Sammen med våre naboer, kunder og leverandører skaper vi arbeidsplasser, aktiviteter og et sted for handel, prat, bespisning og hygge. Slik skapes en levende bygd og et inspirerende springbrett for andre næringsdrivende til å gjøre det samme.'
            },
            kvamskogen: {
                storeId: 'kvamskogen',
                storeName: 'Kvamskogen Landhandleri',
                header: 'oaksdf poawekf pkoaspdfokw papokasfh øoidfoi',
                content1: 'oiajsodif oasijw uuhqiw hqiwhfiuhqwee haosdofihqw. Hqowihefo haisdhbipuq piqhwepfiuqhweø åaosdjfoq jia piuhasdfiuh aoihasdufh lkjhufehi.'
            }
            
        }
        this.changeText = this.changeText.bind(this);
    }

    changeText(e) {
        this.setState({
            [e.target.name]: {...this.state[e.target.name], [e.target.id]: e.target.value}
        })

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
                    <Route path="/evanger" render={() => <Store changeText={this.changeText} signedIn={this.state.signedIn} store={this.state.evanger} />}/>
                    <Route path="/kvamskogen" render={() => <Store changeText={this.changeText} signedIn={this.state.signedIn} store={this.state.kvamskogen}/>}/>
                </div>
            </Router>
        );
    }
}
