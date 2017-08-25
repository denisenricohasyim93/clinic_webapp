import React, { Component } from 'react';

class Appointments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div className="route_section" id="appointments_route">
                <div className="patient_appointments_container">
                    <div className="patient_upcoming_apt">
                        <h3>Upcoming</h3>
                        {
                            this.props.patients.map((patient) =>
                                patient.appointments.map((apt, x) =>
                                    this.check_date(apt) === "upcoming" ?
                                        <div key={x} className="apt_div">
                                            <strong>Name: {patient.name}</strong>
                                            <p>Date: {apt.date}</p>
                                            <p>Time: {apt.time}</p>
                                            <p>Visiting: {apt.visiting}</p>
                                        </div> : "")
                            )
                        }
                    </div>

                    <div className="patient_past_apt">
                        <h3>Past</h3>
                        {
                            this.props.patients.map((patient) =>
                                patient.appointments.map((apt, x) =>
                                    this.check_date(apt) === "past" ?
                                        <div key={x} className="apt_div">
                                            <strong>Name: {patient.name}</strong>
                                            <p>Date: {apt.date}</p>
                                            <p>Time: {apt.time}</p>
                                            <p>Visiting: {apt.visiting}</p>
                                        </div> : "")
                            )
                        }
                    </div>

                    <div className="add_appointment_sidebar">
                        <button onClick={() => this.add_appointment()}>Create Appointment</button>

                        <select name="appointment_patient" onChange={(e) => this.check_option(e.target)}>
                            <option>Select Patient</option>
                            {this.props.patients.map((patient, x) =>
                                <option key={x}>{patient.name}</option>
                            )}
                        </select>

                        {this.state.show ?
                            <div>
                                <input name="appointment_date" placeholder="date" />
                                <input name="appointment_time" placeholder="time" />
                                <input name="appointment_visiting" placeholder="visiting" />
                            </div> : ""
                        }

                    </div>
                </div>
            </div>
        );
    }

    check_option(e) {
        if (e.value !== "Select Patient") {
            return this.setState({ show: true })
        }
        return this.setState({ show: false })
    }

    add_appointment() {
        let date = document.querySelector("input[name=appointment_date]"),
            time = document.querySelector("input[name=appointment_time]"),
            visiting = document.querySelector("input[name=appointment_visiting]"),
            patient = document.querySelector("select[name=appointment_patient]"),

            appointment = {
                date: date.value,
                time: time.value,
                visiting: visiting.value
            }
        this.props.add_appointment(appointment, patient.value)
    }

    check_date(appointment) {
        let time;

        new Date(appointment.date) > new Date() ? time = "upcoming" : time = "past";

        return time
    }
}

export default Appointments;
