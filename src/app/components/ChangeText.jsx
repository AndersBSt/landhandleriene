import React, { Component } from 'react';

export default class ChangeText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const signedIn = this.props.signedIn; 
        return (
            <div>
                {signedIn ? <textarea 
                    name={this.props.storeId}
                    id={this.props.contentId} 
                    cols="30" 
                    rows="10" 
                    value={this.props.content1} 
                    onChange={this.props.changeText}
                ></textarea> : ''}
            </div>
        );
    }
}