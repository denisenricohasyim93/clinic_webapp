import React, { Component } from 'react';
import moment from 'moment'
import Pikaday from 'react-pikaday';
import DateTime from 'react-datetime'

class BookPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: null,
            end_date: null
        }
    }

    render() {
        return (
            <div id="book_panel_container">
                <button id="close_book_panel_btn" onClick={this.props.close_book_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </button>

                <div id="book_panel_fields">
                    <DateTime
                        defaultValue={this.props.selected_slot.start}
                        value={this.state.start_date}
                        onChange={(val) => this.set_date(val, "start")} />
                    <DateTime
                        defaultValue={this.props.selected_slot.end}
                        value={this.state.end_date}
                        onChange={(val) => this.set_date(val, "end")} />

                    <select name="book_patient_select">
                        <option></option>
                        {this.props.patients.map((patient, x) => <option key={x}>
                            {patient.name}</option>)}
                    </select>

                    <textarea placeholder="description..." name="book_appointment_description"></textarea>

                    <button onClick={() => this.construct_appointment()}>Create</button>
                </div>
            </div>
        );
    }

    set_date(val, type) {
        if (type === "start") {
            this.setState({ start_date: val._d })
        }

        if (type === "end") {
            this.setState({ end_date: val._d })
        }
    }

    construct_appointment() {
        let description = document.querySelector("textarea[name=book_appointment_description]"),
            patient = document.querySelector("select[name=book_patient_select]"),
            start_date = this.props.selected_slot.start,
            end_date = this.props.selected_slot.end

        if (this.state.start_date && this.state.end_date) {
            start_date = new Date(this.state.start_date)
            end_date = new Date(this.state.end_date)
        }

        if (!patient.value.match(/^\s*$/)) {

            let appointment = {
                date: moment().format("MM-DD-YYYY, h:mm"),
                title: patient.value,
                desc: description.value,
                start: start_date,
                end: end_date
            }

            this.props.history.push("/patients")
            this.props.add_appointment(appointment, patient.value, "appointment")
            this.props.close_book_panel()

            description.value = "", patient.value = ""
            this.setState({
                start_date: null,
                end_date: null
            })
        }
    }
}

export default BookPanel;