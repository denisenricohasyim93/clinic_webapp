import React, { Component } from 'react';
import moment from 'moment';

class Medicine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_diagnosis_option: ""
        }
    }
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
                    <button id="btn_add_diagnosis" onClick={(e) => this.create_diagnosis(e)}>Create Diagnosis</button>

                    <div id="create_diagnosis_container" onClick={(e) => this.toggle_select_diagnosis(e)}>
                        <div id="selected_option">
                            {this.state.selected_diagnosis_option}
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>

                        <div id="create_diagnosis_container_div_container">
                            {this.props.diagnosis_list.map((d, x) =>
                                <div id="diagnosis_option" onClick={(e) =>
                                    this.setState({ selected_diagnosis_option: e.target.textContent })} key={x}>
                                    {d}
                                </div>)}

                            <div>
                                <strong contentEditable data-text="New Diagnosis" onKeyPress={(e) =>
                                    this.create_new_diagnosis_option(e)}></strong>
                            </div>
                        </div>
                    </div>

                    <textarea id="create_diagnosis_treatment" placeholder="treatment"></textarea>
                    {this.render_diagnosis()}
                </div>
            </div >
        );
    }

    create_new_diagnosis_option(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.add_diagnosis_item(e.target.textContent)
            e.target.textContent = ""
        }
    }

    toggle_select_diagnosis(e) {
        if (e.target.childNodes[0].nodeName === "STRONG") {
            return;
        }

        let div = document.querySelector("#create_diagnosis_container_div_container")
        div.classList.toggle("show")
    }

    render_diagnosis() {
        return <div id="diagnosis_list_container">
            {this.props.patient.diagnosis.map((diagnosis, x) =>
                <div key={x} id="diagnosis">
                    <h4>{diagnosis.date.match(/\d+$/)[0]}</h4>
                    <h4>{diagnosis.diagnosis}</h4>
                    <h4>{diagnosis.treatment}</h4>
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
        let treatment = document.querySelector("#create_diagnosis_treatment"),
            selected_diagnosis_option = this.state.selected_diagnosis_option

        if (treatment) {
            let diagnosis_bj = {
                "date": moment().format("MMM Do YYYY"),
                "diagnosis": selected_diagnosis_option,
                "treatment": treatment.value
            }

            this.props.add_medicine(diagnosis_bj, this.props.patient, "diagnosis")
            this.setState({
                selected_diagnosis_option: ""
            })
            treatment.value = "";
        }
    }

    create_medicine() {
        let name = document.querySelector("select[name=medicine_name]"),
            dose = document.querySelector("input[name=medicine_dose]"),
            strength = document.querySelector("input[name=medicine_strength]"),
            days = document.querySelector("input[name=medicine_days]")

        if (name.value.length > 0 && dose.value.length > 0 && strength.value.length > 0 && days.value.length > 0 && name.value !== "medicine") {

            let medicine = {
                "date": moment().format("MMM Do YYYY"),
                "name": name.value,
                "dose": dose.value,
                "strength": strength.value,
                "days": days.value
            }

            name.value = "medicine", dose.value = "", strength.value = "", days.value = ""
            this.props.add_medicine(medicine, this.props.patient, "medicine")
        }
    }
}

export default Medicine;