import React, { Component } from 'react';
import Vitals from './Vitals'
import Appointments from './AppointmentsP'
import Notes from './Notes'
import Info from './Info'
import Lab from './Lab'
import Medicine from './Medicine'

export default class PatientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_tab: "notes"
        }
    }
    render() {
        return (
            <div id="patients_profile_route" className="route_section">
                <div id="patient_tabs_container">

                    <div id="selected_patient_container">
                        <strong>
                            {this.props.patient[0].name}
                        </strong>
                    </div>

                    <a className="patient_tab" onClick={(e) => this.remove_selected_patient()}>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i></a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("info", e.target)}>Info</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("notes", e.target)}>Notes</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("vitals", e.target)}>Vitals</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("lab", e.target)}>Lab</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("medicine", e.target)}>Medicine</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("appointments", e.target)}>Appointments</a>
                </div>
                {this.show_route(this.props)}
            </div>
        );
    }

    remove_selected_patient() {
        this.props.remove_selected_patient()
    }

    show_route(props) {

        if (this.state.active_tab === "notes") {
            return <Notes
                patient={props.patient[0]}
                add_note={props.add_item}
                darken={props.darken} />
        }
        if (this.state.active_tab === "vitals") {
            return <Vitals
                patient={props.patient[0]}
                add_vitals={props.add_item} />
        }
        if (this.state.active_tab === "lab") {
            return <Lab
                patient={props.patient[0]} />
        }
        if (this.state.active_tab === "info") {
            return <Info
                patient={props.patient[0]} />
        }
        if (this.state.active_tab === "appointments") {
            return <Appointments
                patient={props.patient[0]}
                add_appointment={props.add_appointment} />
        }

        if (this.state.active_tab === "medicine") {
            return <Medicine
                add_dropdown_item={this.props.add_dropdown_item}
                diagnosis_list={props.diagnosis_list}
                patient={props.patient[0]}
                add_medicine={props.add_item} />
        }
    }

    set_active_tab(tab, el) {
        let tabs = document.querySelectorAll(".patient_tab")

        Array.prototype.map.call(tabs, (tab) => {
            tab.className = "patient_tab"
        })

        el.className = "patient_tab active_patient_tab"

        this.setState({ active_tab: tab })
    }
}