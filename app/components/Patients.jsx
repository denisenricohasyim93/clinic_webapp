import React, { Component } from 'react';
import PatientProfile from './PatientProfile'

export default class Patients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searched_patients: [],
            selected_patient: [],
            no_match: false
        }
    }

    render() {
        let { selected_patient, searched_patients } = this.state,
            { patients } = this.props

        return (
            <div className="route_section" id="patients_route">
                {
                    selected_patient.length > 0

                        ? <PatientProfile
                            patient={selected_patient}
                            add_note={this.props.add_note}
                            remove_selected_patient={this.remove_selected_patient.bind(this)}
                            add_vitals={this.props.add_vitals}
                            add_appointment={this.props.add_appointment}>
                        </PatientProfile>

                        : <div>
                            <div id="patients_container">
                                <input type="text" placeholder="search patient..." className="search_patient" onChange={(e) => this.search_patient(e)} />

                                <h3>Name</h3>
                                <h3>Birth</h3>
                                <h3>Age</h3>
                                <h3>Gender</h3>
                                <h3>Address</h3>
                                {searched_patients.length > 0 ? this.render_patients(searched_patients) : this.render_patients(patients)}
                            </div>

                            <div id="add_usr_section">
                                <button id="add_usr_btn" onClick={this.props.add_user}>Add</button>
                                <input type="text" placeholder="name" name="name" />
                                <input type="date" placeholder="birthyear" defaultValue="1990-01-01" name="date" />
                                <select name="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <input type="text" placeholder="address" name="address" />
                            </div>
                        </div>
                }
            </div>
        );
    }

    search_patient(e) {
        let value = e.target.value,
            searched_patients = []

        if (value === "") {
            return this.setState({
                searched_patients: [],
                no_match: false
            })
        }

        if (value.length > 0) {

            for (let i = 0; i < this.props.patients.length; i++) {
                let patient = this.props.patients[i],
                    patient_name = patient.name.toLowerCase();

                if (patient_name.startsWith(value)) {
                    searched_patients.push(patient)
                }
            }

            if (searched_patients.length === 0) {
                return this.setState({ no_match: true })
            }
        }

        return this.setState({
            no_match: false,
            searched_patients: searched_patients
        })
    }

    render_patients(patients) {
        if (this.state.no_match === true) {
            return
        }

        return <div className="patients_list">
            {patients.map((patient, x) =>
                <div key={x} className="patient" onClick={() => this.show_patient_profile(patient)}>
                    <span>{patient.name}</span>
                    <span>{patient.birth}</span>
                    <span>{this.calculate_age(patient.birth)}</span>
                    <span>{patient.gender}</span>
                    <span>{patient.address}</span>
                </div>)}
        </div>
    }

    show_patient_profile(patient) {
        this.setState({
            selected_patient: [patient]
        })
    }

    calculate_age(birth) {
        let age = 0, year = birth.match(/(\d+)$/)[0];
        age = new Date().getFullYear() - year;
        return age;
    }

    remove_selected_patient() {
        this.setState({ selected_patient: [] })
    }
}
