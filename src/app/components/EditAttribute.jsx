import React, { Component } from 'react';
import { Button, Modal, Segment, Form } from 'semantic-ui-react'

export default class EditAttribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            visible: false
        }
    }

    toggleModal() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    cancel() {
        this.setState({
            value: this.props.value
        });
        this.toggleModal();
    }

    save() {
        this.props.handleChangeParent(this.props.attribute, this.state.value);
        this.toggleModal();
    }

    render() {
        return (
            <div>
                <Button
                    attached='right'
                    content={this.props.label}
                    floated='left'
                    onClick={() => this.toggleModal()}
                    primary
                />

                <Modal open={this.state.visible}>
                    <Modal.Header>
                        {this.props.label}
                    </Modal.Header>

                    {this.props.textArea &&
                        <Modal.Description>
                            <Segment>
                                <h5>Forhåndsvisning:</h5>

                                {this.state.value}
                            </Segment>
                        </Modal.Description>
                    }

                    <Modal.Content scrolling>
                        <Form>
                            {this.props.textArea ?
                                <Form.TextArea
                                    autoHeight
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder='Vennligst fyll inn innhold...'
                                    rows={1}
                                    value={this.state.value}
                                />

                                :

                                <Form.Field>
                                    <input
                                        onChange={(event) => this.handleChange(event)}
                                        placeholder='Vennligst fyll inn...'
                                        value={this.state.value}
                                    />
                                </Form.Field>
                            }
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button
                            content='Avbryt'
                            negative
                            onClick={() => this.cancel()}
                        />
                        <Button
                            content='Lagre'
                            onClick={() => this.save()}
                            positive
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}