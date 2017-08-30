import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom'

import Home from './Main/Home'
import PatientsContainer from './Main/Patients'
import Appointments from './Main/Appointments'
import Settings from './Main/Settings'

import data from './Util/data'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patients: data.patients,
            selected_patient: [],
            events: [],
            diagnosis_list: [
                "hypertension",
                "hypotension",
                "cancer",
                "brainworm"
            ],
            medicine_list: [
                "Panodil - Paracetamol - Tablet - 500 mg",
                "Pancillin - Phenoxymethylpenicillin - Tablet - 0.5 M.IU",
                "Pancillin - Phenoxymethylpenicillin - Tablet - 1 M.IU",
                "Pancillin - Phenoxymethylpenicillin - Tablet - 1.5 M.IU",
                "Benzylpenicillin - Benzylpenicillin - Inj. - 1 M.IU",
                "Benzylpenicillin - Benzylpenicillin - Inj. - 2 M.IU",
                "Benzylpenicillin - Benzylpenicillin - Inj. - 5 M.IU",
                "Furix - Furosemid - Tablet - 40 mg",
                "Locoid - Hydrocortison-17-butyrat - Cream - 0.1%"
            ],
            medicine_dose_list: [
                "1+1+0+0",
                "2+1+0+0",
                "2+2+1+0",
                "2+2+2+0",
                "1+2+3+1"
            ]
        }
    }

    componentDidMount() {
        this.set_appointments()
    }

    render() {
        return (
            <div id="content">
                <div className="darken"></div>
                <Router>
                    <div id="route_container">
                        <Link to="/" className="route_tab"><i className="fa fa-home" aria-hidden="true"></i></Link>
                        <Link to="/patients" className="route_tab"><i className="fa fa-user-md" aria-hidden="true"></i></Link>
                        <Link to="/appointments" className="route_tab"><i className="fa fa-calendar" aria-hidden="true"></i></Link>
                        <Link to="/settings" className="route_tab"><i className="fa fa-cog" aria-hidden="true"></i></Link>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/patients" render={props =>
                                <PatientsContainer
                                    show_patient_profile={this.show_patient_profile.bind(this)}
                                    remove_selected_patient={this.remove_selected_patient.bind(this)}
                                    add_dropdown_item={this.add_dropdown_item.bind(this)}
                                    diagnosis_list={this.state.diagnosis_list}
                                    medicine_list={this.state.medicine_list}
                                    medicine_dose_list={this.state.medicine_dose_list}
                                    patients={this.state.patients}
                                    add_patient={this.add_patient.bind(this)}
                                    add_appointment={this.add_appointment.bind(this)}
                                    darken={this.darken.bind(this)}
                                    add_item={this.add_item.bind(this)}
                                    selected_patient={this.state.selected_patient} />
                            } />
                            <Route path="/appointments" render={props =>
                                <Appointments
                                    patients={this.state.patients}
                                    add_appointment={this.add_appointment.bind(this)}
                                    events={this.state.events}
                                    darken={this.darken.bind(this)} />
                            } /> />
              <Route path="/settings" component={Settings} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

    remove_selected_patient() {
        this.setState({ selected_patient: [] })
    }

    darken() {
        let darken_div = document.querySelector(".darken")
        darken_div.classList.toggle("darken_show")
    }

    add_patient(patient) {
        if (patient.name &&
            patient.date &&
            patient.gender &&
            patient.address) {

            let updated_patients = this.state.patients.slice(),
                birth = patient.date.split("-"),
                reversed_birth = birth.reverse().join("-"),
                date1 = new Date(),
                date2 = new Date(patient.date),
                time_diff = Math.abs(date2.getTime() - date1.getTime()),
                diff_years = Math.ceil((time_diff / (1000 * 3600 * 24) / 365))

            updated_patients.unshift({
                name: patient.name,
                birth: reversed_birth,
                gender: patient.gender,
                id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
                age: diff_years,
                gravida: patient.gravida,
                hypertension: patient.hypertension,
                diabetes: patient.diabetes,
                phone: patient.phone,
                smoker: patient.smoker,
                address: patient.address,
                notes: [],
                appointments: [],
                vitals: [],
                "medicine": [],
                "diagnosis": []
            })

            this.setState({ patients: updated_patients })
        }
    }

    add_item(item, patient, property) {
        let patients = this.state.patients.slice()

        for (let i = 0; i < patients.length; i++) {
            if (patients[i].name === patient.name) {
                patients[i][property].unshift(item)
            }
        }

        this.setState({ patients: patients })
    }

    add_appointment(appointment, patient) {
        let patients = this.state.patients.slice(), selected_patient;

        for (let i = 0; i < patients.length; i++) {
            if (patients[i].name === patient) {
                selected_patient = patients[i]
                patients[i].appointments.unshift(appointment)
            }
        }
        let appointments = []

        this.state.patients.map((patient) => {
            patient.appointments.map((apt) => {
                appointments.push(apt)
            })
        })


        this.setState({
            patients: patients,
            events: appointments,
            selected_patient: [selected_patient]
        })

    }

    set_appointments() {
        let appointments = []

        this.state.patients.map((patient) => {
            patient.appointments.map((apt) => {
                appointments.push(apt)
            })
        })

        this.setState({ events: appointments })
    }

    add_dropdown_item(item, category) {
        let new_items = this.state[category].slice()
        new_items.push(item)

        if (category === "diagnosis_list") {
            this.setState({ diagnosis_list: new_items })
        }
        if (category === "medicine_list") {
            this.setState({ medicine_list: new_items })
        }

        if (category === "medicine_dose_list") {
            this.setState({ medicine_dose_list: new_items })
        }
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

export default App




