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
    send_post_req,
    logout
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

import axios from 'axios'
import ip_address from './Util/config'

class App extends Component {

    constructor(props) {
        super(props)

        this.logout = logout.bind(this)
        this.send_post_req = send_post_req.bind(this)
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

    init_app_state(data, type) {
        if (type === "demo") {
            this.setState({
                lab_list: data[1],
                patients: data[0].patients,
                selected_patient: [],
                events: [],
                diagnosis_list: data[0].diagnosis_list,
                medicine_list: data[0].medicine_list,
                medicine_dose_list: data[0].medicine_dose_list
            })
            setTimeout(() => this.set_appointments(), 1000)
        }

        if (type === "data") {
            this.setState({
                username: data.username,
                _id: data._id,
                email: data.email,
                password: data.password,
                lab_list: data.lab_list,
                patients: data.patients,
                selected_patient: [],
                events: [],
                diagnosis_list: data.diagnosis_list,
                medicine_list: data.medicine_list,
                medicine_dose_list: data.medicine_dose_list
            })
            setTimeout(() => this.set_appointments(), 1000)
        }
    }

    componentDidMount() {
        if (window.location.pathname === '/demo') {
            return axios.get(`/demo_data`)
                .then((res) => { this.init_app_state(res.data, "demo") })
                .catch(function (error) { console.log(error); });
        }

        else {
            return axios.request({
                url: `/data`,
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "http://ec2-34-212-25-151.us-west-2.compute.amazonaws.com:3000",
                    "Access-Control-Allow-Credentials": "true"
                }
            }).then((res) => {
                if (res.data.length === 2) {
                    return this.init_app_state(res.data, "demo")
                }
                this.init_app_state(res.data, "data")
            }).catch(function (error) { console.log(error); });
        }
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
                        <button onClick={() => this.logout()} id="logout">Logout</button>

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/patients" render={props =>
                                <PatientsContainer
                                    lab_list={this.state.lab_list}
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




