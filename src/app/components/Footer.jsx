import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Footer</h1>
                    <Link to="/admin">Admin</Link>
                </Container>
            </div>
        );
    }
}