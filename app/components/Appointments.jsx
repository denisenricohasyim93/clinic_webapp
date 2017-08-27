import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

class Appointments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [
                {
                    'title': 'meeting with dr Hemn',
                    'start': new Date(2017, 8, 2, 8, 0, 0),
                    'end': new Date(2017, 8, 2, 10, 0, 0),
                    'desc': 'meeting with someone'
                },
                {
                    'title': 'meeting with dr Hardee',
                    'start': new Date(2017, 8, 1, 9, 30, 0),
                    'end': new Date(2017, 8, 1, 10, 30, 0)
                }
            ]
        }
    }

    render() {
        return (
            <div className="route_section" id="appointments_route">
                <BigCalendar
                    events={this.state.events}
                    step={15}
                    timeslots={2}
                    min={this.get_min_time()}
                    defaultView='week' />
            </div>
        );
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
