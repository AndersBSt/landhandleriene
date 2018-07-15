import { h, Component } from 'preact';
import { Link } from 'react-router-dom';

import { signOut } from '../../server/firebase/firebase';

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
                    {this.props.signedIn ? <button onClick={signOut}>Logg ut</button> : ''}
                </div>
        
        );
    }
}