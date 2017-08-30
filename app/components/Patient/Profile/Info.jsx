import React, { Component } from 'react';
import Diagnosis from './Diagnosis'

class Info extends Component {
    render() {
        return (
            <div className="patient_profile_route">
                <div id="patients_info_container">
                    <p> <u>_id:</u> {this.props.patient.id}</p>
                    <p> <u>name:</u> {this.props.patient.name}</p>
                    <p> <u>birth_date:</u> {this.props.patient.birth}</p>
                    <p> <u>age:</u> {this.props.patient.age}</p>
                    <p> <u>gender:</u> {this.props.patient.gender}</p>
                    <p> <u>gravida:</u> {this.props.patient.gravida}</p>
                    <p> <u>hypertension:</u> {this.props.patient.hypertension}</p>
                    <p> <u>smoker:</u> {this.props.patient.smoker} years</p>
                    <p> <u>diabetes:</u> {this.props.patient.diabetes} years</p>
                    <p> <u>address:</u> {this.props.patient.address}</p>
                    <p> <u>phone:</u> {this.props.patient.phone}</p>
                </div>

                <Diagnosis
                    create_diagnosis={this.props.create_diagnosis}
                    patient={this.props.patient}
                    selected_option={this.props.selected_option}
                    set_selected_option={this.props.set_selected_option}
                    category_list="diagnosis_list"
                    add_dropdown_item={this.props.add_dropdown_item}
                    items={this.props.diagnosis_list}
                    category="diagnosis" />
            </div>
        );
    }
}

export default Info;