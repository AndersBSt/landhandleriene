import React, { Component } from 'react';
import { Rail, Button, Modal, Form } from 'semantic-ui-react';

import '../css/editcards.css';

export default class EditCards extends Component {
    constructor(props) {
		super(props);

		let cards = this.props.cards;

		this.state = {
			header1: cards.header1,
			description1: cards.description1,
			header2: cards.header2,
			description2: cards.description2,
			header3: cards.header3,
			description3: cards.description3
		}
	}

	toggleModal() {
		this.setState({
			visible: !this.state.visible
		});
	}

	handleChange(field, event) {
        this.setState({
            [field]: event.target.value
        });
    }

	cancel() {
		let cards = this.props.cards;

        this.setState({
            header1: cards.header1,
			description1: cards.description1,
			header2: cards.header2,
			description2: cards.description2,
			header3: cards.header3,
			description3: cards.description3
		});
        this.toggleModal();
    }

    save() {
        this.props.handleChangeParent('cards', {header1: this.state.header1, description1: this.state.description1, header2: this.state.header2, description2: this.state.description2, header3: this.state.header3, description3: this.state.description3});
        this.toggleModal();
	}

	render() {
		return(
			<Rail attached position='right'>
				<Button
                    attached='right'
                    content='Endre Kort'
                    floated='left'
                    onClick={() => this.toggleModal()}
                    primary
                />
				<Modal size='large' open={this.state.visible}>
                    <Modal.Header>
						Endre Kort
                    </Modal.Header>

                    <Modal.Content scrolling>
						<Form>
							<Form.Group>
								<Form.Group grouped>
									<Form.Field>
										<input
											onChange={(event) => this.handleChange('header1', event)}
											placeholder='Vennligst fyll inn...'
											value={this.state.header1}
										/>
									</Form.Field>

									<Form.TextArea
										autoHeight
										onChange={(event) => this.handleChange('description1', event)}
										placeholder='Vennligst fyll inn innhold...'
										rows={16}
										value={this.state.description1}
									/>
								</Form.Group>

								<Form.Group grouped>
									<Form.Field>
										<input
											onChange={(event) => this.handleChange('header2', event)}
											placeholder='Vennligst fyll inn...'
											value={this.state.header2}
										/>
									</Form.Field>

									<Form.TextArea
										autoHeight
										onChange={(event) => this.handleChange('description2', event)}
										placeholder='Vennligst fyll inn innhold...'
										rows={16}
										value={this.state.description2}
									/>
								</Form.Group>

								<Form.Group grouped>
									<Form.Field>
										<input
											onChange={(event) => this.handleChange('header3', event)}
											placeholder='Vennligst fyll inn...'
											value={this.state.header3}
										/>
									</Form.Field>

									<Form.TextArea
										autoHeight
										onChange={(event) => this.handleChange('description3', event)}
										placeholder='Vennligst fyll inn innhold...'
										rows={16}
										value={this.state.description3}
									/>
								</Form.Group>
							</Form.Group>
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
			</Rail>
		);
	}
}
