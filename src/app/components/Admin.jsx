import React, { Component } from 'react';

import { signIn } from '../../server/firebase/firebase';

import { Container } from 'semantic-ui-react';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg: null,
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({errMsg: null});
        signIn(this.emailRef.value, this.passwordRef.value).catch(error => this.setState({errMsg: error.message}))
    }

    render() {
        return (
            <Container>
                {this.props.signedIn ? 
                <div>
                    <h1>Velkommen!</h1> 
                    <p>Du har nå tilgang til å endre tekster på nettsiden.</p>
                </div> :
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                    <input type="email" placeholder="Email" ref={emailRef => this.emailRef = emailRef}/>
                    <input type="password" placeholder="Password" ref={passwordRef => this.passwordRef = passwordRef}/>
                    <button type="submit">Login</button>
                    {this.state.errMsg === null ? '' : <p>{this.state.errMsg}</p>}
                </form>}
            </Container>
        );
    }
}