import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import BookPanel from './BookPanel'

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Appointments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show_book_panel: true
        }
    }

    render() {
        return (
            <div className="route_section" id="appointments_route">
                {this.state.show_book_panel ? <BookPanel
                    close_book_panel={this.close_book_panel.bind(this)}
                    patients={this.props.patients}>
                </BookPanel> : ""}

                <BigCalendar
                    selectable
                    events={this.props.events}
                    step={15}
                    timeslots={2}
                    min={this.get_min_time()}
                    defaultView='week'
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={(slot_info) => this.book_slot(slot_info)}
                />

            </div>
        );
    }

    book_slot(slot_info) {
        this.setState({ show_book_panel: true })
        this.props.darken()
    }

    close_book_panel() {
        this.props.darken()
        this.setState({ show_book_panel: false })
    }

    get_min_time() {
        let time = new Date()

        time.setHours(7)
        time.setMinutes(0)
        time.setSeconds(0)

        return time
    }
}

export default Appointments;
