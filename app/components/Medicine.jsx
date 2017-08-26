import React, { Component } from 'react';
import moment from 'moment';

class Medicine extends Component {
    render() {
        return (
            <div className="patient_profile_route">
                <div id="medicine_container">
                    <div id="create_medicine_container">
                        <select name="medicine_name">
                            <option>medicine</option>
                            <option>Aspirin</option>
                            <option>Paracetamol</option>
                            <option>Insulin</option>
                        </select>

                        <input placeholder="strength" type="text" name="medicine_strength" />
                        <input placeholder="daily dose" type="text" name="medicine_dose" />
                        <input placeholder="days" type="number" name="medicine_days" />
                        <button onClick={() => this.create_medicine()}>Create</button>
                    </div>
                    {this.render_medicine()}
                </div>

                <div id="diagnosis_container">
                    <button id="btn_add_diagnosis" onClick={() => this.create_diagnosis()}>Add Diagnosis</button>
                    <textarea id="create_diagnosis_content"></textarea>
                    {this.render_diagnosis()}
                </div>
            </div>
        );
    }

    render_diagnosis() {
        return <div id="diagnosis_list_container">
            {this.props.patient.diagnosis.map((diagnosis, x) =>
                <div key={x} id="diagnosis">
                    <h4>{diagnosis.date}</h4>
                    <h4>{diagnosis.content}</h4>
                </div>
            )}
        </div>
    }

    render_medicine() {
        return <div id="medicine_list_container">
            {this.props.patient.medicine.map((medicine, x) =>
                <div key={x} id="medicine">
                    <h4>{medicine.date}</h4>
                    <h4>{medicine.name}</h4>
                    <h4>{medicine.strength}</h4>
                    <h4>{medicine.dose}</h4>
                    <h4>{medicine.days}</h4>
                </div>
            )}
        </div>
    }

    create_diagnosis() {
        let content = document.querySelector("#create_diagnosis_content")

        if (content) {
            let diagnosis = {
                "date": moment().format("MMM Do YYYY"),
                "content": content.value
            }

            this.props.add_medicine(diagnosis, this.props.patient, "diagnosis")
            content.value = "";
        }
    }

    create_medicine() {
        let name = document.querySelector("select[name=medicine_name]"),
            dose = document.querySelector("input[name=medicine_dose]"),
            strength = document.querySelector("input[name=medicine_strength]"),
            days = document.querySelector("input[name=medicine_days]")

        if (name.length > 0 && dose.length > 0 && strength.length > 0 && days.length > 0 && name !== "medicine") {

            let medicine = {
                "date": moment().format("MMM Do YYYY"),
                "name": name.value,
                "dose": dose.value,
                "strength": strength.value,
                "days": days.value
            }

            name.value = "", dose.value = "", strength.value = "", days.value = ""
            this.props.add_medicine(medicine, this.props.patient, "medicine")
        }
    }
}

export default Medicine;