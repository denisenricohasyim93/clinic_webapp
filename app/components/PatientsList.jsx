import React, { Component } from 'react';

class PatientsList extends Component {
    render() {
        const { searched_patients, patients, render_patients, search_patient } = this.props
        return (
            <div id="patients_container">
                <input type="text"
                    placeholder="search patient..."
                    id="search_patient_input"
                    onChange={(e) => search_patient(e)} />

                <h3>Name</h3>
                <h3>Birth</h3>
                <h3>Age</h3>
                <h3>Gender</h3>
                <h3>Address</h3>
                <h3>Phone</h3>
                {searched_patients.length > 0
                    ? render_patients(searched_patients)
                    : render_patients(patients)}
            </div>
        );
    }


}

export default PatientsList;