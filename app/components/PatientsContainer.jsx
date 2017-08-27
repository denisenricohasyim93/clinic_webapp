import React, { Component } from 'react';
import PatientProfile from './PatientProfile'
import PatientsList from './PatientsList'
import AddPatientPanel from './AddPatientPanel'

export default class PatientsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searched_patients: [],
            selected_patient: [],
            no_match: false,
            show_add_patient_panel: false
        }
    }

    render() {
        let { selected_patient, searched_patients } = this.state,
            { patients, remove_selected_patient, add_appointment, add_patient, add_item } = this.props

        return (
            <div className="route_section" id="patients_route">

                <button id="add_patient_btn" onClick={() => this.show_add_patient_panel()}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>

                {
                    this.state.show_add_patient_panel
                        ? <AddPatientPanel
                            add_patient={add_patient}
                            close_patient_panel={() => this.close_patient_panel()} />
                        : ""
                }

                {
                    selected_patient.length > 0
                        ? <PatientProfile
                            patient={selected_patient}
                            remove_selected_patient={this.remove_selected_patient.bind(this)}
                            add_appointment={add_appointment}
                            selected_patient={selected_patient}
                            add_item={add_item} />

                        : <PatientsList
                            patients={patients}
                            searched_patients={searched_patients}
                            render_patients={this.render_patients.bind(this)}
                            search_patient={this.search_patient.bind(this)}
                        />
                }
            </div>
        );
    }

    close_patient_panel() {
        this.setState({ show_add_patient_panel: false })
        this.props.darken()
    }

    show_add_patient_panel() {
        this.setState({ show_add_patient_panel: true })
        this.props.darken()
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
                    <span>{patient.age}</span>
                    <span>{patient.gender}</span>
                    <span>{patient.address}</span>
                    <span>{patient.phone}</span>
                </div>)}
        </div>
    }

    show_patient_profile(patient) {
        this.setState({
            selected_patient: [patient]
        })
    }

    remove_selected_patient() {
        this.setState({ selected_patient: [] })
    }
}
