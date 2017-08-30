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
                            <div key={x} className="apt_div">
                                <p><span id="span_date_title">Start:</span> {this.render_date(apt.start)}</p>
                                <p><span id="span_date_title">End:</span> {this.render_date(apt.end)}</p>
                            </div>
                        )}
                    </div>

                    {/*                     <div className="patient_past_apt">
                        <h3>Past</h3>
                        {this.props.patient.appointments.map((apt, x) =>
                            this.check_date(apt) === "past" ?
                                <div key={x} className="apt_div">
                                    <p>Date: {}</p>
                                </div> : ""
                        )}
                    </div> */}

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

    render_date(date) {
        let returned_date = moment(date).format("MM-DD-YYYY h:mm:ss a")
        //todo show past dates here too
        return <span>{returned_date}</span>
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