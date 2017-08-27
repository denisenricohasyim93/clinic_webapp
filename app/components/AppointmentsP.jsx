import React, { Component } from 'react';

class Appointments extends Component {
    render() {
        return (
            <div className="patient_profile_route">
                <div className="patient_appointments_container">
                    <div className="patient_upcoming_apt">
                        <h3>Upcoming</h3>
                        {this.props.patient.appointments.map((apt, x) =>
                            this.check_date(apt) === "upcoming" ?
                                <div key={x} className="apt_div">
                                    <p>Date: {apt.date}</p>
                                    <p>Time: {apt.time}</p>
                                    <p>Visiting: {apt.visiting}</p>
                                </div> : ""
                        )}
                    </div>

                    <div className="patient_past_apt">
                        <h3>Past</h3>
                        {this.props.patient.appointments.map((apt, x) =>
                            this.check_date(apt) === "past" ?
                                <div key={x} className="apt_div">
                                    <p>Date: {}</p>
                                </div> : ""
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

    check_date(appointment) {
        let time;

        new Date(appointment.date) > new Date() ? time = "upcoming" : time = "past";

        return time
    }
}

export default Appointments;