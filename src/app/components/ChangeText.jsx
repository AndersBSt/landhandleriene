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
                {signedIn && this.props.content !== undefined ? 
                    <textarea 
                        name={this.props.storeId}
                        id={this.props.contentId} 
                        cols="100" 
                        rows="10" 
                        value={this.props.content} 
                        onChange={this.props.changeText}
                        ></textarea> 
                :   ''}
            </div>
        );
    }
}