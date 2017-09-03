import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {
    remove_selected_patient,
    darken,
    add_patient,
    add_item,
    navigate,
    move_appointment,
    add_appointment,
    set_appointments,
    add_dropdown_item,
    stop_medicine,
    show_patient_profile,
} from './MainFunctions'

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
import lab from './Util/lab'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lab: lab,
            patients: data.patients,
            selected_patient: [],
            events: [],
            diagnosis_list: data.diagnosis_list,
            medicine_list: data.medicine_list,
            medicine_dose_list: data.medicine_dose_list
        }

        this.darken = darken.bind(this)
        this.remove_selected_patient = remove_selected_patient.bind(this)
        this.add_item = add_item.bind(this)
        this.add_patient = add_patient.bind(this)
        this.navigate = navigate.bind(this)
        this.move_appointment = move_appointment.bind(this)
        this.add_appointment = add_appointment.bind(this)
        this.set_appointments = set_appointments.bind(this)
        this.add_dropdown_item = add_dropdown_item.bind(this)
        this.stop_medicine = stop_medicine.bind(this)
        this.show_patient_profile = show_patient_profile.bind(this)
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
                                    lab_list={this.state.lab}
                                    stop_medicine={this.stop_medicine.bind(this)}
                                    show_patient_profile={this.show_patient_profile.bind(this)}
                                    remove_selected_patient={this.remove_selected_patient.bind(this)}
                                    add_dropdown_item={this.add_dropdown_item.bind(this)}
                                    diagnosis_list={this.state.diagnosis_list}
                                    medicine_list={this.state.medicine_list}
                                    medicine_dose_list={this.state.medicine_dose_list}
                                    patients={this.state.patients}
                                    add_patient={this.add_patient.bind(this)}
                                    add_appointment={this.add_appointment.bind(this)}
                                    darken={this.darken}
                                    add_item={this.add_item.bind(this)}
                                    selected_patient={this.state.selected_patient} />
                            } />
                            <Route path="/appointments" render={props =>
                                <Appointments
                                    move_appointment={this.move_appointment.bind(this)}
                                    navigate={this.navigate.bind(this)}
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
}

export default App




