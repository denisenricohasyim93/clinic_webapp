import React, { Component } from 'react';
import Vitals from './Vitals'
import Appointments from './AppointmentsP'

export default class PatientProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_tab: "notes"
        }
    }
    render() {
        return (
            <div id="patients_profile_route" className="route_section">
                <button onClick={() => this.props.remove_selected_patient()}>Go Back</button>
                <div id="patient_tabs_container">
                    <div className="patient_tab" onClick={() => this.set_active_tab("notes")}>Notes</div>
                    <div className="patient_tab" onClick={() => this.set_active_tab("vitals")}>Vitals</div>
                    <div className="patient_tab" onClick={() => this.set_active_tab("lab")}>Lab</div>
                    <div className="patient_tab" onClick={() => this.set_active_tab("appointments")}>Appointments</div>
                    <div className="patient_tab" onClick={() => this.set_active_tab("info")}>Info</div>
                </div>
                {this.show_route(this.props)}
            </div>
        );
    }

    show_route(props) {
        if (this.state.active_tab === "notes") {
            return <Notes patient={props.patient[0]} add_note={props.add_note} />
        }
        if (this.state.active_tab === "vitals") {
            return <Vitals
                patient={props.patient[0]}
                add_vitals={this.props.add_vitals} />
        }
        if (this.state.active_tab === "lab") {
            return <Lab patient={props.patient[0]} />
        }
        if (this.state.active_tab === "info") {
            return <Info patient={props.patient[0]} />
        }
        if (this.state.active_tab === "appointments") {
            return <Appointments
                patient={props.patient[0]}
                add_appointment={this.props.add_appointment} />
        }
    }

    set_active_tab(tab) { this.setState({ active_tab: tab }) }
}


const Notes = props => (
    <div className="patient_profile_route">
        <div className="notes_side">
            {show_notes(props)}
        </div>

        <div className="add_note_sidebar">
            <button onClick={() => construct_note(props)}>Add note</button>
            <input type="text" placeholder="Title" name="note_title" />
            <input type="text" placeholder="Date" name="note_date" />
            <textarea name="note_content"></textarea>
        </div>
    </div>
)

function construct_note(props) {
    let date = document.querySelector("input[name=note_date]"),
        title = document.querySelector("input[name=note_title]"),
        content = document.querySelector("textarea[name=note_content]"),

        note = {
            date: date.value,
            title: title.value,
            content: content.value
        }
    props.add_note(note, props.patient)
}

function show_notes(props) {
    return <div id="notes_contaienr">
        {props.patient.notes.map((note, x) =>
            <div key={x} className="note">
                <h3>Title: {note.title}</h3>
                <strong>Date: {note.date}</strong>
                <em>{note.content}</em>
            </div>)
        }
    </div>
}

const Lab = props => (
    <div className="patient_profile_route">

    </div>
)

const Info = props => (
    <div className="patient_profile_route">

    </div>
)