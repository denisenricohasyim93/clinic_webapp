import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import Patients from './components/Patients'
import Appointments from './components/Appointments'
import Settings from './components/Settings'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      patients: [
        {
          name: "Alan",
          birth: "26-07-1993",
          gender: "M",
          patient_id: "derive from bd + gender 6 from bd, auto gen 6 last (odd for f, even for m)",
          address: "gothenburg/Sweden",
          notes: [{
            date: 1,
            title: 'note 1',
            content: "this dude loves programming"
          }, {
            date: 2,
            title: 'note 2',
            content: "more notes here yay"
          }, {
            date: 3,
            title: 'note 3',
            content: "We have to make this app awesome"
          }],
          vitals: [
            {
              date: "03-07-2016",
              time: "10:00am",
              vitals_id: "object_id",
              bloodpressure: "systolic",
              pulse: "500",
              temperature: "25C",
              respiratory_rate: "50",
              saturation: "100%",
              oxygen: "2 liters"
            },
            {
              date: "03-07-2019",
              time: "10:00am",
              vitals_id: "object_id",
              bloodpressure: "diastolic",
              pulse: "200",
              temperature: "25C",
              respiratory_rate: "10",
              saturation: "20%",
              oxygen: "6 liters"
            },
            {
              date: "03-07-2016",
              time: "10:00am",
              vitals_id: "object_id",
              bloodpressure: "systolic",
              pulse: "500",
              temperature: "25C",
              respiratory_rate: "50",
              saturation: "100%",
              oxygen: "2 liters"
            }
          ],
          appointments: [
            {
              time: "08.00am",
              date: "03-07-2020",
              visiting: "Dr. Kamal"
            },
            {
              time: "08.00am",
              date: "03-07-2010",
              visiting: "Dr. Hardee"
            },
            {
              time: "08.00am",
              date: "03-07-2020",
              visiting: "Sean Carrol"
            },
            {
              time: "08.00am",
              date: "03-07-2005",
              visiting: "Neil Degrasse"
            }
          ]
        }, {
          name: "Dilan",
          birth: "03-07-1996",
          gender: "M",
          patient_id: "derive from bd + gender 6 from bd, auto gen 6 last (odd for f, even for m)",
          address: "gothenburg/Sweden",
          notes: [{
            date: 1,
            title: 'note 1',
            content: "my brother is awesome, let's just keep making more notes"
          }],
          vitals: [
            {
              date: "03-07-2016",
              time: "10:00am",
              vitals_id: "object_id",
              bloodpressure: "systolic",
              pulse: "500",
              temperature: "25C",
              respiratory_rate: "50",
              saturation: "100%",
              oxygen: "2 liters"
            },
            {
              date: "03-07-2019",
              time: "10:00am",
              vitals_id: "object_id",
              bloodpressure: "diastolic",
              pulse: "200",
              temperature: "25C",
              respiratory_rate: "10",
              saturation: "20%",
              oxygen: "6 liters"
            }
          ],
          appointments: [
            {
              time: "08.00am",
              date: "03-07-2040",
              visiting: "test1"
            },
            {
              time: "08.00am",
              date: "03-07-2070",
              visiting: "test32"
            }
          ]
        },
        {
          name: "Hemn",
          birth: "23-09-1985",
          gender: "M",
          patient_id: "derive from bd + gender 6 from bd, auto gen 6 last (odd for f, even for m)",
          address: "Erbil/Iraq",
          notes: [{
            date: 1,
            title: 'note 1',
            content: "the most epic doctor in the world!"
          }, {
            date: 2,
            title: 'note 1',
            content: "just more notes all the way"
          }],
          vitals: [{
            date: "03-07-2016",
            time: "10:00am",
            vitals_id: "object_id",
            bloodpressure: "systolic",
            pulse: "500",
            temperature: "25C",
            respiratory_rate: "50",
            saturation: "100%",
            oxygen: "2 liters"
          },
          {
            date: "03-07-2019",
            time: "10:00am",
            vitals_id: "object_id",
            bloodpressure: "diastolic",
            pulse: "200",
            temperature: "25C",
            respiratory_rate: "10",
            saturation: "20%",
            oxygen: "6 liters"

          }],
          appointments: [
            {
              time: "10.00am",
              date: "03-07-2009",
              visiting: "Sean Carrol"
            },
            {
              time: "12.00am",
              date: "03-07-2045",
              visiting: "Neil Degrasse"
            }
          ]
        },
        {
          name: "Hawre",
          birth: "23-09-1985",
          gender: "M",
          patient_id: "derive from bd + gender 6 from bd, auto gen 6 last (odd for f, even for m)",
          address: "Erbil/Iraq",
          notes: [],
          vitals: [{
            date: "03-07-2016",
            time: "10:00am",
            vitals_id: "object_id",
            bloodpressure: "systolic",
            pulse: "500",
            temperature: "25C",
            respiratory_rate: "50",
            saturation: "100%",
            oxygen: "2 liters"
          },
          {
            date: "03-07-2019",
            time: "10:00am",
            vitals_id: "object_id",
            bloodpressure: "diastolic",
            pulse: "200",
            temperature: "25C",
            respiratory_rate: "10",
            saturation: "20%",
            oxygen: "6 liters"

          }],
          appointments: [
            {
              time: "11.00am",
              date: "03-07-2025",
              visiting: "Jhon Jones"
            },
            {
              time: "07.00am",
              date: "03-07-2010",
              visiting: "Dr. Soran"
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div id="content">
        <Router>
          <div id="route_container">
            <Link to="/" className="route_tab">Home</Link>
            <Link to="/patients" className="route_tab">Patients</Link>
            <Link to="/appointments" className="route_tab">Appointments</Link>
            <Link to="/settings" className="route_tab">Settings</Link>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/patients" render={props =>
                <Patients
                  patients={this.state.patients}
                  add_note={this.add_note.bind(this)}
                  add_user={this.add_user.bind(this)}
                  add_vitals={this.add_vitals.bind(this)}
                  add_appointment={this.add_appointment.bind(this)} />
              } />
              <Route path="/appointments" render={props =>
                <Appointments
                  patients={this.state.patients}
                  add_user={this.add_user.bind(this)}
                  add_appointment={this.add_appointment.bind(this)} />
              } /> />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  add_user() {
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
        patients[i].notes.push(note)
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



