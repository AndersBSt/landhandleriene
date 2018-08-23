import React, { Component } from 'react';
import { Container, Segment, Rail } from 'semantic-ui-react';

import EditAttribute from './EditAttribute';

export default class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storeId: this.props.store.storeId,
            storeName: this.props.store.storeName,
            header: this.props.store.header,
            content1: this.props.store.content1,
            content2: this.props.store.content2
        }
    }

    changeStore(attribute, value) {
        // Update state, then run callback once update has been completed
        this.setState(
            { [attribute]: value },
            () => this.props.updateStore(this.state)
        );
    }

    render() {
        let signedIn = this.props.signedIn;
        return (
            <div>

                <Container>
                    <Segment basic textAlign='center'>
                        <h1>{this.props.store.storeName}</h1>
                        {signedIn &&
                            <Rail attached position='right'>
                                <EditAttribute
                                    attribute='storeName'
                                    handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                    label='Endre Butikk Navn'
                                    value={this.state.storeName}
                                />
                            </Rail>
                        }
                    </Segment>

                    <Segment basic textAlign='center'>
                        <h2>{this.props.store.header}</h2>
                        {signedIn &&
                            <Rail attached position='right'>
                                <EditAttribute
                                    attribute='header'
                                    handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                    label='Endre Topptekst'
                                    value={this.state.header}
                                />
                            </Rail>
                        }
                    </Segment>

                    <Segment basic textAlign='center'>
                        <p>{this.props.store.content1}</p>
                            {signedIn &&
                                <Rail attached position='right'>
                                    <EditAttribute
                                        attribute='content1'
                                        handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                        label='Endre Seksjon'
                                        textArea
                                        value={this.state.content1}
                                    />
                                </Rail>
                            }
                    </Segment>

                    <Segment basic textAlign='center'>
                        <p>{this.props.store.content2}</p>
                            {signedIn &&
                                <Rail attached position='right'>
                                    <EditAttribute
                                        attribute='content2'
                                        handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                        label='Endre Seksjon'
                                        textArea
                                        value={this.state.content2}
                                    />
                                </Rail>
                            }
                    </Segment>
                </Container>
            </div>
        );
    }
}