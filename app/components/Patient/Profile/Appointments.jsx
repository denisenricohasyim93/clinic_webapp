import React, { Component } from 'react';
import moment from 'moment'

class Appointments extends Component {
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
                        <button onClick={() => this.add_appointment()}>Create Appointment</button>
                        <input name="appointment_date" placeholder="date" />
                        <input name="appointment_time" placeholder="time" />
                        <input name="appointment_visiting" placeholder="visiting" />
                    </div>
                </div>
            </div>
        );
    }

    render_date(date, condition, key) {
        let current_date = moment().format("MM-DD-YYYY"),
            end_date = moment(date.end).format("MM-DD-YYYY")

        if (condition === "upcoming" && end_date >= current_date) {
            return <div key={key} className="apt_div">
                <p><span id="span_date_title">Start:</span> {moment(date.start).format("MM-DD-YYYY")}</p>
                <p><span id="span_date_title">End:</span> {moment(date.end).format("MM-DD-YYYY")}</p>
            </div>
        }

        if (condition === "past" && end_date < current_date) {
            return <div key={key} className="apt_div">
                <p><span id="span_date_title">Start:</span> {moment(date.start).format("MM-DD-YYYY")}</p>
                <p><span id="span_date_title">End:</span> {moment(date.end).format("MM-DD-YYYY")}</p>
            </div>

        }
    }

    add_appointment() {
        let date = document.querySelector("input[name=appointment_date]"),
            time = document.querySelector("input[name=appointment_time]"),
            visiting = document.querySelector("input[name=appointment_visiting]"),

            appointment = {
                date: date.value,
                time: time.value,
                visiting: visiting.value
            }

        this.props.add_appointment(appointment, this.props.patient)
    }
}

export default Appointments;