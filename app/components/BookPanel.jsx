import React, { Component } from 'react';
import moment from 'moment'

class BookPanel extends Component {
    render() {
        return (
            <div id="book_panel_container">
                <button id="close_book_panel_btn" onClick={this.props.close_book_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </button>

                <div id="book_panel_fields">
                    <select name="book_patient_select">
                        <option></option>
                        {this.props.patients.map((patient, x) => <option key={x}>
                            {patient.name}</option>)}
                    </select>

                    <textarea placeholder="description..." name="book_appointment_description"></textarea>

                    <button onClick={() => this.construct_appointment()}>Create</button>
                </div>

            </div >
        );
    }

    construct_appointment() {
        let description = document.querySelector("textarea[name=book_appointment_description]"),
            patient = document.querySelector("select[name=book_patient_select]"),
            start = this.props.selected_slot.start.toLocaleString().match(/(\d).(\d\d).(\d+)..(\d).(\d\d)/),
            end = this.props.selected_slot.end.toLocaleString().match(/(\d).(\d\d).(\d+)..(\d).(\d\d)/)

        if (!description.value.match(/^\s*$/) && !patient.value.match(/^\s*$/)) {

            let appointment = {
                date: moment().format("MMM Do YYYY"),
                title: patient.value,
                desc: description.value,
                start: new Date(start[3], start[1] - 1, start[2], start[4], start[5], 0),
                end: new Date(end[3], end[1] - 1, end[2], end[4], end[5], 0)
            }

            this.props.add_appointment(appointment, patient.value, "appointment")
            this.props.close_book_panel()
            description.value = "", patient.value = ""

        }
        setTimeout(() => {
            let all = document.querySelectorAll(".rbc-event-label");
            Array.prototype.map.call(all, (arg) => {
                arg.innerHTML = "sadsad"
            })
        }, 2000)
    }
}

export default BookPanel;