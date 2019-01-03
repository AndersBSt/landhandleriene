import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import '../css/cards.css';

export default class Cards extends Component {
    constructor(props) {
		super(props);

        this.state = {

        }
	}

	render() {
		return(
			<Card.Group centered itemsPerRow={3} stackable>
				<Card>
					<Card.Content>
						<Card.Header>{this.props.cards.header1}</Card.Header>
						<Card.Description>{this.props.cards.description1}</Card.Description>
					</Card.Content>
				</Card>

				<Card className='middle-card'>
					<Card.Content>
						<Card.Header>{this.props.cards.header2}</Card.Header>
						<Card.Description>{this.props.cards.description2}</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header>{this.props.cards.header3}</Card.Header>
						<Card.Description>{this.props.cards.description3}</Card.Description>
					</Card.Content>
				</Card>
			</Card.Group>
		);
	}
}