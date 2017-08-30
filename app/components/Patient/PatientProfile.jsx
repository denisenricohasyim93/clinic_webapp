import React, { Component } from 'react';
import moment from 'moment'

import Vitals from './Profile/Vitals'
import Appointments from './Profile/Appointments'
import Notes from './Profile/Notes'
import Info from './Profile/Info'
import Lab from './Profile/Lab'
import Medicine from './Profile/Medicine'

export default class PatientsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_tab: "notes",
            selected_diagnosis_option: ""
        }
    }

    componentDidMount() {
        this.setState({
            selected_diagnosis_option: ""
        })
    }

    render() {
        return (
            <div id="patients_profile_route" className="route_section">
                <div id="patient_tabs_container">

                    <div id="selected_patient_container">
                        <strong>
                            id:{this.props.patient[0].id}
                            &emsp;&emsp;
                            {this.props.patient[0].name}
                            &emsp;&emsp;
                            {this.props.patient[0].age}
                        </strong>
                    </div>

                    <a className="patient_tab" onClick={(e) => this.set_active_tab("info", e.target)}>Info</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("notes", e.target)}>Notes</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("vitals", e.target)}>Vitals</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("lab", e.target)}>Lab</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("medicine", e.target)}>Medicine</a>
                    <a className="patient_tab" onClick={(e) => this.set_active_tab("appointments", e.target)}>Appointments</a>
                    <a className="patient_tab" id="close_patient_tab" onClick={(e) => this.remove_selected_patient()}>
                        <i className="fa fa-window-close-o" aria-hidden="true"></i>
                    </a>
                </div>
                {this.show_route(this.props)}
            </div>
        );
    }

    remove_selected_patient() { this.props.remove_selected_patient() }

    set_selected_diagnosis_option(option) {
        this.setState({ selected_diagnosis_option: option })
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
                patient={props.patient[0]}
                create_diagnosis={this.create_diagnosis.bind(this)}
                selected_option={this.state.selected_diagnosis_option}
                set_selected_option={this.set_selected_diagnosis_option.bind(this)}
                add_dropdown_item={this.props.add_dropdown_item}
                diagnosis_list={props.diagnosis_list} />
        }

        if (this.state.active_tab === "appointments") {
            return <Appointments
                patient={props.patient[0]}
                add_appointment={props.add_appointment} />
        }

        if (this.state.active_tab === "medicine") {
            return <Medicine
                create_diagnosis={this.create_diagnosis.bind(this)}
                selected_option={this.state.selected_diagnosis_option}
                set_selected_option={this.set_selected_diagnosis_option.bind(this)}
                medicine_dose_list={this.props.medicine_dose_list}
                add_dropdown_item={this.props.add_dropdown_item}
                medicine_list={this.props.medicine_list}
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

    create_diagnosis() {
        let treatment = document.querySelector("#create_diagnosis_treatment")

        if (treatment && this.state.selected_diagnosis_option) {
            let diagnosis_bj = {
                "date": moment().format("MMM Do YYYY"),
                "diagnosis": this.state.selected_diagnosis_option,
                "treatment": treatment.value
            }

            treatment.value = ""
            this.setState({ selected_diagnosis_option: "" })
            this.props.add_item(diagnosis_bj, this.props.patient[0], "diagnosis")

        }
    }
}