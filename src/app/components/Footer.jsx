import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <h1>Footer</h1>
                <Link to="/admin">Admin</Link>
            </div>
        );
    }
}