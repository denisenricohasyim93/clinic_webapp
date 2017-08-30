import React, { Component } from 'react';
import moment from 'moment';
import DropDown from '../../Util/DropDown';

class Medicine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_diagnosis_option: "",
            selected_medicine_option: "",
            selected_medicine_dose_option: ""
        }
    }

    componentDidMount() {
        this.setState({
            selected_diagnosis_option: "",
            selected_medicine_option: "",
            selected_medicine_dose_option: ""
        })
    }

    render() {

        return (
            <div className="patient_profile_route">
                <div id="medicine_container">
                    <div id="create_medicine_container">
                        <div id="parent_medicine_dropdown_container">
                            <div id="medicine_dropdown_container">
                                <DropDown
                                    selected_option={this.state.selected_medicine_option}
                                    set_selected_option={this.set_selected_medicine_option.bind(this)}
                                    category_list="medicine_list"
                                    add_dropdown_item={this.props.add_dropdown_item}
                                    items={this.props.medicine_list}
                                    category="medicine" />
                            </div>
                        </div>

                        <div id="parent_medicine_dose_dropdown_container">
                            <div id="medicine_dose_dropdown_container">
                                <DropDown
                                    selected_option={this.state.selected_medicine_dose_option}
                                    set_selected_option={this.set_selected_medicine_dose_option.bind(this)}
                                    category_list="medicine_dose_list"
                                    add_dropdown_item={this.props.add_dropdown_item}
                                    items={this.props.medicine_dose_list}
                                    category="dose" />
                            </div>
                        </div>

                        <input placeholder="days" type="number" name="medicine_days" />
                        <button onClick={() => this.create_medicine()}>Create</button>
                    </div>

                    <div id="active_medicine_container">
                        <u>Current Medicine</u>
                        {this.render_active_medicine()}
                    </div>

                    <div id="inactive_medicine_container">
                        <u>Past Medicine</u>
                        {this.render_inactive_medicine()}
                    </div>
                </div>

                <div id="diagnosis_container">
                    <button id="btn_add_diagnosis"
                        onClick={(e) => this.create_diagnosis(e)}>
                        Create Diagnosis
                    </button>

                    <div id="dropdown_diagnosis_container">
                        <DropDown
                            selected_option={this.state.selected_diagnosis_option}
                            set_selected_option={this.set_selected_diagnosis_option.bind(this)}
                            category_list="diagnosis_list"
                            add_dropdown_item={this.props.add_dropdown_item}
                            items={this.props.diagnosis_list}
                            category="diagnosis"
                        />
                    </div>

                    <textarea id="create_diagnosis_treatment" placeholder="treatment"></textarea>
                    {this.render_diagnosis()}
                </div>
            </div>
        );
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

    render_active_medicine() {
        return <div id="medicine_list_container">
            {this.props.patient.medicine.map((medicine, x) =>
                moment(medicine.end) > moment() ?
                    <div key={x} id="medicine">
                        <h4>{medicine.start}</h4>
                        <h4>{medicine.end}</h4>
                        <h4>{medicine.name.match(/(\w+)/)[0]}</h4>
                        <h4>{medicine.strength}</h4>
                        <h4>{medicine.dose}</h4>
                        <h4>{medicine.days}</h4>
                    </div> : ""
            )}
        </div>
    }

    render_inactive_medicine() {
        return <div id="medicine_list_container">
            {this.props.patient.medicine.map((medicine, x) =>
                moment(medicine.end) < moment() ?
                    <div key={x} id="medicine">
                        <h4>{medicine.start}</h4>
                        <h4>{medicine.end}</h4>
                        <h4>{medicine.name.match(/(\w+)/)[0]}</h4>
                        <h4>{medicine.strength}</h4>
                        <h4>{medicine.dose}</h4>
                        <h4>{medicine.days}</h4>
                    </div> : ""
            )}
        </div>
    }

    create_diagnosis() {
        let treatment = document.querySelector("#create_diagnosis_treatment")

        if (treatment && this.state.selected_diagnosis_option) {
            let diagnosis_bj = {
                "date": moment().format("MMM Do YYYY"),
                "diagnosis": this.state.selected_diagnosis_option,
                "treatment": treatment.value
            }

            treatment.value = ""
            this.setState({ selected_diagnosis_option: "" })
            this.props.add_medicine(diagnosis_bj, this.props.patient, "diagnosis")

        }
    }

    create_medicine() {
        let selected_medicine_option = this.state.selected_medicine_option,
            selected_medicine_dose_option = this.state.selected_medicine_dose_option,
            days = document.querySelector("input[name=medicine_days]")

        if (selected_medicine_option
            && selected_medicine_dose_option
            && days.value.length > 0
            && selected_medicine_option !== "medicine") {

            let medicine = {
                "start": moment().format("MM-DD-YYYY"),
                "end": moment().add(Number(days.value), 'days').format("MM-DD-YYYY"),
                "name": selected_medicine_option,
                "dose": selected_medicine_dose_option,
                "strength": selected_medicine_option.match(/\-\s(\w+[\.\d+\w+\s]*)$/)[1],
                "days": days.value
            }

            days.value = ""

            this.setState({
                selected_medicine_option: "",
                selected_medicine_dose_option: ""
            })

            this.props.add_medicine(medicine, this.props.patient, "medicine")
        }
    }

    set_selected_diagnosis_option(option) {
        this.setState({ selected_diagnosis_option: option })
    }

    set_selected_medicine_option(option) {
        this.setState({ selected_medicine_option: option })
    }

    set_selected_medicine_dose_option(option) {
        this.setState({ selected_medicine_dose_option: option })
    }
}

export default Medicine;