import React, { Component } from 'react';

import ChangeText from './ChangeText';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.store.storeName}</h1>
                <h2>{this.props.store.header}</h2>
                <p>{this.props.store.content1}</p>
                <ChangeText 
                    contentId='content1' 
                    storeId={this.props.store.storeId} 
                    signedIn={this.props.signedIn} 
                    content={this.props.store.content1} 
                    changeText={(e) => this.props.changeStore(e)}
                ></ChangeText>

                <p>{this.props.store.content2}</p>
                <ChangeText 
                    contentId='content2' 
                    storeId={this.props.store.storeId} 
                    signedIn={this.props.signedIn} 
                    content={this.props.store.content2} 
                    changeText={(e) => this.props.changeStore(e)}
                ></ChangeText>
            </div>
        );
    }
}