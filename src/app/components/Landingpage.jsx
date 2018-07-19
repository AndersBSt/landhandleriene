import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';

export default class Landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Velkommen til landhandleriene</h1>
                </Container>
            </div>
        );
    }
}