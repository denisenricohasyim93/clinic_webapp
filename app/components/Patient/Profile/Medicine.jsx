import React, { Component } from 'react';
import moment from 'moment';
import DropDown from '../../Util/DropDown';
import Searchable from '../../Util/Searchable';
import Diagnosis from './Diagnosis'

class Medicine extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                                <Searchable
                                    options_list={this.props.medicine_list}
                                    set_selected_option={this.set_selected_medicine_option.bind(this)}
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
            let input = document.querySelector("#search_item_input")
            input.value = ""

            this.setState({
                selected_medicine_option: "",
                selected_medicine_dose_option: ""
            })

            this.props.add_medicine(medicine, this.props.patient, "medicine")
        }
    }

    set_selected_medicine_option(option) {
        this.setState({ selected_medicine_option: option })
    }

    set_selected_medicine_dose_option(option) {
        this.setState({ selected_medicine_dose_option: option })
    }
}

export default Medicine;