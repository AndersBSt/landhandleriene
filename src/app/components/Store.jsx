import React, { Component } from 'react';

import ChangeText from './ChangeText';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        const store = this.props.store;
        return (
            <div>
                <h1>{store.storeName}</h1>
                <h2>{store.header}</h2>
                <p>{store.content1}</p>
                <ChangeText 
                    contentId='content1' 
                    storeId={store.storeId} 
                    signedIn={this.props.signedIn} 
                    content={store.content1} 
                    changeText={this.props.changeText}
                ></ChangeText>

                <p>{store.content2}</p>
                <ChangeText 
                    contentId='content2' 
                    storeId={store.storeId} 
                    signedIn={this.props.signedIn} 
                    content={store.content2} 
                    changeText={this.props.changeText}
                ></ChangeText>
            </div>
        );
        
    }
}