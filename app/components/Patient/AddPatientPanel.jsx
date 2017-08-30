import React, { Component } from 'react';

class AddPatientPanel extends Component {
    render() {
        return (
            <div id="add_patient_container">
                <button id="close_patient_panel_btn" onClick={this.props.close_patient_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>  </button>

                <div id="add_patient_fields">
                    <input type="text" placeholder="patient_name" name="patient_name" />
                    <input type="date" placeholder="patient_birth_date" defaultValue="1990-01-01" name="patient_birth_date" />

                    <select name="patient_gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <div id="label">
                        <label htmlFor="patient_smoker">Smoker</label>
                        <input type="checkbox" name="patient_smoker" id="patient_smoker" />
                    </div>

                    <div id="label">
                        <label htmlFor="patient_gravida">Gravida</label>
                        <input type="checkbox" name="patient_gravida" id="patient_gravida" />
                    </div>

                    <input type="text" placeholder="address" name="patient_address" />
                    <input type="text" placeholder="phone" name="patient_phone" />

                    <button id="submit_new_patient" onClick={() => this.add_patient()}>add</button>
                </div>
            </div>
        );
    }

    add_patient() {
        let patient_details = {
            name: document.querySelector("input[name=patient_name]").value,
            date: document.querySelector("input[name=patient_birth_date]").value,
            gender: document.querySelector("select[name=patient_gender]").value,
            address: document.querySelector("input[name=patient_address]").value,
            phone: document.querySelector("input[name=patient_phone]").value,
            diabetes: document.querySelector("input[name=patient_diabetes]").value,
            hypertension: document.querySelector("input[name=patient_hypertension]").value,
            gravida: document.querySelector("input[name=patient_gravida]").value,
            smoker: document.querySelector("input[name=patient_smoker]").value
        }

        this.props.add_patient(patient_details)
        this.props.close_patient_panel()
    }
}

export default AddPatientPanel;