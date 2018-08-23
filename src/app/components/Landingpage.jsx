import React, { Component } from 'react';
import { Container, Segment, Rail } from 'semantic-ui-react';

import EditAttribute from './EditAttribute';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: this.props.home.header,
            cards: this.props.home.cards
        }
    }

    changeLandingPage(attribute, value) {
        // Update state, then run callback once update has been completed
        this.setState(
            { [attribute]: value },
            () => this.props.updateHome(this.state)
        );
    }

    render() {
        return (
            <Container>
                <Segment basic textAlign='center'>
                    <h1 className='welcome'>Velkommen til Landhandleriene</h1>
                </Segment>

                <Segment basic textAlign='center'>
                    <h2 className='header'>{this.props.home.header}</h2>
                    {this.props.signedIn &&
                        <Rail attached position='right'>
                            <EditAttribute
                                attribute='header'
                                handleChangeParent={(attribute, value) => this.changeLandingPage(attribute, value)}
                                label='Endre Topptekst'
                                value={this.state.header}
                            />
                        </Rail>
                    }
                </Segment>
            </Container>
        );
    }
}