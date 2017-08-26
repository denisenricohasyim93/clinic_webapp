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
                </div>
            </div>
        );
    }

    render_medicine() {
        return <div id="medicine_list_container">
            {this.props.patient.medicine.map((medicine) =>
                <div id="medicine">
                    <h4>{medicine.date}</h4>
                    <h4>{medicine.name}</h4>
                    <h4>{medicine.strength}</h4>
                    <h4>{medicine.dose}</h4>
                    <h4>{medicine.days}</h4>
                </div>
            )}
        </div>
    }

    create_medicine() {
        let name = document.querySelector("select[name=medicine_name]").value,
            dose = document.querySelector("input[name=medicine_dose]").value,
            strength = document.querySelector("input[name=medicine_strength]").value,
            days = document.querySelector("input[name=medicine_days]").value

        if (name.length > 0 && dose.length > 0 && strength.length > 0 && days.length > 0 && name !== "medicine") {

            let medicine = {
                "date": moment().format("MMM Do YYYY"),
                "name": name,
                "dose": dose,
                "strength": strength,
                "days": days
            }

            name = "", dose = "", strength = "", days = ""
            this.props.add_medicine(medicine, this.props.patient)
        }
    }
}

export default Medicine;