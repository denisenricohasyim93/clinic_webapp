import React, { Component } from 'react';
import moment from 'moment'
import Pikaday from 'react-pikaday';
import TimePicker from 'rc-time-picker';
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
        console.log(this.state);
        return (
            <div id="book_panel_container">
                <button id="close_book_panel_btn" onClick={this.props.close_book_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </button>

                <div id="book_panel_fields">
                    <DateTime
                        value="start"
                        onChange={(val) => this.set_date(val, "start")} />
                    <DateTime
                        value="end"
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
            this.setState({
                start_date: val._d
            })
        }

        if (type === "end") {
            this.setState({
                end_date: val._d
            })
        }

    }

    construct_appointment() {
        let description = document.querySelector("textarea[name=book_appointment_description]"),
            patient = document.querySelector("select[name=book_patient_select]"),

            start = this.props.selected_slot.start.toLocaleString().match(/(\d).(\d\d).(\d+)..(\d).(\d\d)/),
            end = this.props.selected_slot.end.toLocaleString().match(/(\d).(\d\d).(\d+)..(\d).(\d\d)/),

            start_date = new Date(start[3], start[1] - 1, start[2], start[4], start[5], 0),
            end_date = new Date(end[3], end[1] - 1, end[2], end[4], end[5], 0)

        if (this.state.start_date && this.state.end_date) {
            start_date = moment(this.state.start_date).format("MM-DD-YYYY, h:mm:ss a");
            start_date = new Date(start)

            end_date = moment(this.state.end_date).format("MM-DD-YYYY, h:mm:ss a");
            end_date = new Date(end)
        }


        if (!patient.value.match(/^\s*$/)) {

            let appointment = {
                date: moment().format("MMM Do YYYY"),
                title: patient.value,
                desc: description.value,
                start: start_date,
                end: end_date
            }

            console.log(appointment);



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