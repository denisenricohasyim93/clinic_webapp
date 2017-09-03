import React, { Component } from 'react';
import moment from 'moment'
import DateTime from 'react-datetime'

class Appointments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: null,
            end_date: null
        }
    }

    render() {
        return (
            <div className="patient_profile_route">
                <div className="patient_appointments_container">
                    <div className="patient_upcoming_apt">
                        <h3>Upcoming</h3>
                        {this.props.patient.appointments.map((apt, x) =>
                            this.render_date(apt, "upcoming", x)
                        )}
                    </div>

                    <div className="patient_past_apt">
                        <h3>Past</h3>
                        {this.props.patient.appointments.map((apt, x) =>
                            this.render_date(apt, "past", x)
                        )}
                    </div>

                    <div className="add_appointment_sidebar">
                        <DateTime
                            inputProps={{ placeholder: "start" }}
                            value={this.state.start_date}
                            onChange={(val) => this.set_date(val, "start")} />

                        <DateTime
                            inputProps={{ placeholder: "end" }}
                            value={this.state.end_date}
                            onChange={(val) => this.set_date(val, "end")} />

                        <textarea id="add_appointment_patient_profile_description">
                        </textarea>

                        <button onClick={() => this.add_appointment()}>Create Appointment</button>
                    </div>
                </div>
            </div>
        );
    }

    set_date(val, type) {
        if (type === "start") {
            this.setState({ start_date: val._d })
        }

        if (type === "end") {
            this.setState({ end_date: val._d })
        }
    }

    render_date(date, condition, key) {
        let current_date = moment().format("MM-DD-YYYY, h:mm a"),
            end_date = moment(date.end).format("MM-DD-YYYY, h:mm a"),
            start_date = moment(date.start).format("MM-DD-YYYY, h:mm a")

        if (condition === "upcoming" && end_date >= current_date) {
            return <div key={key} className="apt_div">
                <p><span id="span_date_title">Start:</span> {start_date}</p>
                <p><span id="span_date_title">End:</span> {end_date}</p>
            </div>
        }

        if (condition === "past" && end_date < current_date) {
            return <div key={key} className="apt_div">
                <p><span id="span_date_title">Start:</span> {start_date}</p>
                <p><span id="span_date_title">End:</span> {end_date}</p>
            </div>

        }
    }

    add_appointment() {
        let description = document.querySelector("#add_appointment_patient_profile_description"),
            patient = this.props.patient.name,
            start_date = new Date(this.state.start_date),
            end_date = new Date(this.state.end_date),

            appointment = {
                date: moment().format("MM-DD-YYYY, h:mm"),
                title: patient,
                desc: description.value,
                start: start_date,
                end: end_date
            }

        this.props.add_appointment(appointment, patient, "appointment")

        description.value = ""

        this.setState({
            start_date: null,
            end_date: null
        })
    }
}

export default Appointments;