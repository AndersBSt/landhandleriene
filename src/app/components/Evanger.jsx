import React, { Component } from 'react';

export default class Evanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            store: 'Evanger Landhandleri',
            content1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reiciendis quia sint officia ut. Quasi fugiat, vero quae excepturi rerum ad cumque facilis a, illum corrupti, alias nam distinctio aspernatur!'
        }
        this.updateText = this.updateText.bind(this);
        this.signInOut = this.signInOut.bind(this);
    }

    updateText(evt) {
        this.setState({
            content1: evt.target.value
        })  
    }

    signInOut() {
        this.state.signedIn ? this.setState({signedIn: false}) : this.setState({signedIn: true})
    }



    render() {
        const signedIn = this.state.signedIn; 
        return (
            <div>
                <h1>{this.state.store}</h1>
                <p>{this.state.content1}</p>
                {signedIn ? <textarea name="textbox" id="textbox" cols="30" rows="10" value={this.state.content1} onChange={this.updateText}></textarea> : ''}
                <button onClick={this.signInOut}>{this.state.signedIn ? 'Sign Out': 'Sign In'}</button>
            </div>
        );
    }
}