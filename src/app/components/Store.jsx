import React, { Component } from 'react';
import { Container, Segment, Rail, Divider } from 'semantic-ui-react';

import EditAttribute from './EditAttribute';
import EditListAttribute from './EditListAttribute';

import '../css/store.css';

const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

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

                <Divider></Divider>

                <Segment basic textAlign='center'>
                    <h3 className='quote'>"{this.props.store.quote}"</h3>
                    {signedIn &&
                        <Rail attached position='right'>
                            <EditAttribute
                                attribute='quote'
                                handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                label='Endre Sitat'
                                value={this.state.quote}
                            />
                        </Rail>
                    }
                </Segment>

                <Divider></Divider>

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

                <Segment basic textAlign='center'>
                    <h3 className='opening-hours-header'>Åpningstider</h3>
                    {this.renderOpeningHours(this.props.store.openingHours)}
                    {signedIn &&
                        <Rail attached position='right'>
                            <EditListAttribute
                                attribute='openingHours'
                                handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                label='Endre Åpningstider'
                                value={this.state.openingHours}
                            />
                        </Rail>
                    }
                </Segment>

                <Segment basic textAlign='center'>
                    <h3>Begrensede åpningstider i helligdager</h3>
                    {this.renderOpeningHours(this.props.store.openingHoursHoliday, true)}
                    {signedIn &&
                        <Rail attached position='right'>
                            <EditListAttribute
                                attribute='openingHoursHoliday'
                                handleChangeParent={(attribute, value) => this.changeStore(attribute, value)}
                                label='Endre Spesielle Åpningstider'
                                value={this.state.openingHoursHoliday}
                                holidays
                            />
                        </Rail>
                    }
                </Segment>
            </Container>
        );
    }
}