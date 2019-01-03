import React, { Component } from 'react';
import { Rail, Button, Modal, Form } from 'semantic-ui-react';

export default class EditListAttribute extends Component {
    constructor(props) {
        super(props);

        // Since arrays are mutable objects, we need to slice to make a separate clone of the array to work on. If not the array in props will also be updated causing undesirable behaviour.
        this.state = {
            value: this.props.value.slice(),
            visible: false
        }
    }

    toggleModal() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleChange(event, index) {
        // Set up new array with new value, that can overwrite old array with old value
        let value = this.state.value;
        value[index] = event.target.value;
        this.setState({
            value: value
        });
    }

    addItem() {
        // Add new empty item at end of array
        this.setState({
            value: this.state.value.concat('')
        });
    }

    removeItem(index) {
        //console.log(this.state.value.array.splice(index, 1))
        this.setState({
            value: this.state.value.filter((s, idx) => index !== idx)
        });
    }

    cancel() {
        // Since arrays are mutable objects, we need to slice to make a separate clone of the array to work on. If not the array in props will also be updated causing undesirable behaviour.
        this.setState({
            value: this.props.value.slice()
        });
        this.toggleModal();
    }

    save() {
        this.props.handleChangeParent(this.props.attribute, this.state.value);
        this.toggleModal();
    }

    renderInputs() {
        return this.state.value.map((day, index) => (
            this.props.holidays ?
                <Form.Group key={index}>
                    <input
                        onChange={(event) => this.handleChange(event, index)}
                        placeholder='Vennligst fyll inn...'
                        value={day}
                    />
                    <Button
                        content='Fjern'
                        negative
                        onClick={() => this.removeItem(index)}
                    />
                </Form.Group>

                :

                <Form.Field key={index}>
                    <input
                        onChange={(event) => this.handleChange(event, index)}
                        placeholder='Vennligst fyll inn...'
                        value={day}
                    />
                </Form.Field>
        ));
    }

    render() {
        return (
            <Rail attached position='right'>
                <Button
                    attached='right'
                    content={this.props.label}
                    floated='left'
                    onClick={() => this.toggleModal()}
                    primary
                />

                <Modal open={this.state.visible} size='tiny'>
                    <Modal.Header>
                        {this.props.label}
                    </Modal.Header>

                    <Modal.Content scrolling>
                        <Form>
                            {this.renderInputs()}
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        {this.props.holidays &&
                            <Button
                                content='Legg til ny åpningstid'
                                floated='left'
                                onClick={() => this.addItem()}
                                primary
                            />
                        }
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
            </Rail>
        );
    }
}