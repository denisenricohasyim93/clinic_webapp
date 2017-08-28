import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import PatientsContainer from './components/PatientsContainer'
import Appointments from './components/Appointments'
import Settings from './components/Settings'

import data from './data'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      patients: data.patients,
      events: [],
      diagnosis_list: [
        "hypertension",
        "hyptension",
        "cancer",
        "brainworm"
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
            <Link to="/" className="route_tab">Home</Link>
            <Link to="/patients" className="route_tab">Patients</Link>
            <Link to="/appointments" className="route_tab">Appointments</Link>
            <Link to="/settings" className="route_tab">Settings</Link>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/patients" render={props =>
                <PatientsContainer
                  add_diagnosis_item={this.add_diagnosis_item.bind(this)}
                  diagnosis_list={this.state.diagnosis_list}
                  patients={this.state.patients}
                  add_patient={this.add_patient.bind(this)}
                  add_appointment={this.add_appointment.bind(this)}
                  darken={this.darken.bind(this)}
                  add_item={this.add_item.bind(this)} />
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

  add_diagnosis_item(diagnosis) {
    let new_diagnosis_list = this.state.diagnosis_list.slice()
    new_diagnosis_list.push(diagnosis)

    this.setState({
      diagnosis_list: new_diagnosis_list
    })
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
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].name === patient) {
        patients[i].appointments.unshift(appointment)
      }
    }

    this.setState({ patients: patients })
    this.set_appointments()
  }

  set_appointments() {
    let appointments = []

    this.state.patients.map((patient) => {
      patient.appointments.map((apt) => {
        appointments.push(apt)
      })
    })

    this.setState({
      events: appointments
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
})



