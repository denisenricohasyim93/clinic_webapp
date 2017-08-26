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
      patients: data.patients
    }
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
                  patients={this.state.patients}
                  add_note={this.add_note.bind(this)}
                  add_patient={this.add_patient.bind(this)}
                  add_vitals={this.add_vitals.bind(this)}
                  add_appointment={this.add_appointment.bind(this)}
                  darken={this.darken.bind(this)} />
              } />
              <Route path="/appointments" render={props =>
                <Appointments
                  patients={this.state.patients}
                  add_patient={this.add_patient.bind(this)}
                  add_appointment={this.add_appointment.bind(this)} />
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

  add_patient() {
    let name = document.querySelector("input[name=name]")
      , date = document.querySelector("input[name=date]")
      , gender = document.querySelector("select[name=gender]")
      , address = document.querySelector("input[name=address]")

    if (name.value && date.value && gender.value && address.value) {
      let updated_patients = this.state.patients.slice(),
        birth = date.value.split("-"),
        reversed_birth = birth.reverse().join("-")

      updated_patients.push({
        name: name.value,
        birth: reversed_birth,
        gender: gender.value,
        patient_id: "derive from bd + gender 6 from bd, auto gen 6 last (odd for f, even for m)",
        address: address.value,
        notes: [],
        appointments: [],
        vitals: []
      })

      this.setState({ patients: updated_patients })

      name.value = ""
      address.value = ""
    }
  }

  add_note(note, patient) {
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].name === patient.name) {
        patients[i].notes.unshift(note)
      }
    }

    this.setState({ patients: patients })
  }

  add_vitals(vitals, patient) {
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].name === patient.name) {
        patients[i].vitals.push(vitals)
      }
    }

    this.setState({ patients: patients })
  }

  add_appointment(appointment, patient) {
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].name === patient.name || patients[i].name === patient) {
        patients[i].appointments.push(appointment)
      }
    }

    this.setState({ patients: patients })
  }
}



document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
})



