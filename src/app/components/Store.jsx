import React, { Component } from 'react';
import { Container, Segment, Divider } from 'semantic-ui-react';

import EditAttribute from './EditAttribute';
import Cards from './Cards';
import EditCards from './EditCards';
import EditListAttribute from './EditListAttribute';

import '../css/store.css';

export default class Store extends Component {
    constructor(props) {
        super(props);

        this.state = {
            storeId: this.props.store.storeId,
            storeName: this.props.store.storeName,
            header: this.props.store.header,
            content1: this.props.store.content1,
            quote: this.props.store.quote,
            content2: this.props.store.content2,
            cards: this.props.store.cards,
            openingHours: this.props.store.openingHours,
            openingHoursHoliday: this.props.store.openingHoursHoliday
        }
    }

    changeStore(attribute, value) {
        // Update state, then run callback once update has been completed
        this.setState(
            { [attribute]: value },
            () => this.props.updateStore(this.state)
        );
    }

    renderOpeningHours(openingHours, holidays) {
        let days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
        if (holidays) {
            return openingHours.map((day, index) =>
                <p key={index} className='opening-hours-days'>{day}</p>
            );
        }
        return openingHours.map((day, index) =>
            <p key={index} className='opening-hours-days'>{days[index]}: {day}</p>
        );
    }

    render() {
        let signedIn = this.props.signedIn;
        return (
            <Container>
                <Segment basic textAlign='center'>
                    <h1 className='welcome'>Velkommen til <span className='store-name'>{this.props.store.storeName}</span> Landhandleri</h1>
                </Segment>

                <Segment basic textAlign='center'>
                    <h2 className='header'>{this.props.store.header}</h2>
                    {signedIn &&
                        <EditAttribute
                            attribute='header'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Topptekst'
                            value={this.state.header}
                        />
                    }
                </Segment>

                <Segment basic textAlign='center'>
                    <p>{this.props.store.content1}</p>
                    {signedIn &&
                        <EditAttribute
                            attribute='content1'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Seksjon'
                            textArea
                            value={this.state.content1}
                        />
                    }
                </Segment>

                <Divider></Divider>

                <Segment basic textAlign='center'>
                    <h3 className='quote'>"{this.props.store.quote}"</h3>
                    {signedIn &&
                        <EditAttribute
                            attribute='quote'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Sitat'
                            value={this.state.quote}
                        />
                    }
                </Segment>

                <Divider></Divider>

                <Segment basic textAlign='center'>
                    <p>{this.props.store.content2}</p>
                    {signedIn &&
                        <EditAttribute
                            attribute='content2'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Seksjon'
                            textArea
                            value={this.state.content2}
                        />
                    }
                </Segment>

                <Segment basic textAlign='center'>
                    <Cards
                        cards={this.state.cards}
                    />
                    {signedIn &&
                        <EditCards
                            cards={this.state.cards}
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                        />
                    }
                </Segment>

                <Segment basic textAlign='center'>
                    <h3 className='opening-hours-header'>Åpningstider</h3>
                    {this.renderOpeningHours(this.props.store.openingHours)}
                    {signedIn &&
                        <EditListAttribute
                            attribute='openingHours'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Åpningstider'
                            value={this.state.openingHours}
                        />
                    }
                </Segment>

                <Segment basic textAlign='center'>
                    <h3>Begrensede åpningstider i helligdager</h3>
                    {this.renderOpeningHours(this.props.store.openingHoursHoliday, true)}
                    {signedIn &&
                        <EditListAttribute
                            attribute='openingHoursHoliday'
                            handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                            label='Endre Spesielle Åpningstider'
                            value={this.state.openingHoursHoliday}
                            holidays
                        />
                    }
                </Segment>
            </Container>
        );
    }
}