import React, { Component } from 'react';
import moment from 'moment';
import DropDown from '../../Util/DropDown';
import Searchable from '../../Util/Searchable';
import Diagnosis from './Diagnosis'
import Pikaday from 'react-pikaday';

class Medicine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected_medicine_option: "",
            selected_medicine_dose_option: "",
            start_date: null,
            end_date: null
        }
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

                        <Pikaday
                            placeholder="start"
                            value={this.state.start_date}
                            onChange={(date) => this.setState({
                                start_date: date
                            })} />
                        <Pikaday
                            placeholder="end"
                            value={this.state.end_date}
                            onChange={(date) => this.setState({
                                end_date: date
                            })} />

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
            {
                this.props.patient.medicine.map((medicine, x) =>
                    moment(medicine.end) > moment() ?
                        <div key={x} id="medicine">
                            <h4>{medicine.start}</h4>
                            <h4>{medicine.end}</h4>
                            <h4>{medicine.name.match(/(\w+)/)[0]}</h4>
                            <h4>{medicine.strength}</h4>
                            <h4>{medicine.dose}</h4>
                        </div> : ""
                )}
        </div>
    }

    render_inactive_medicine() {
        return <div id="medicine_list_container">
            {
                this.props.patient.medicine.map((medicine, x) =>
                    moment(medicine.end) < moment() ?
                        <div key={x} id="medicine">
                            <h4>{medicine.start}</h4>
                            <h4>{medicine.end}</h4>
                            <h4>{medicine.name.match(/(\w+)/)[0]}</h4>
                            <h4>{medicine.strength}</h4>
                            <h4>{medicine.dose}</h4>
                        </div> : ""
                )}
        </div>
    }

    create_medicine() {
        let { selected_medicine_option,
            selected_medicine_dose_option,
            start_date,
            end_date } = this.state


        if (selected_medicine_option
            && selected_medicine_dose_option
            && start_date
            && end_date
            && selected_medicine_option !== "medicine") {

            let medicine = {
                "start": moment(start_date).format("MM-DD-YYYY"),
                "end": moment(end_date).format("MM-DD-YYYY"),
                "name": selected_medicine_option,
                "dose": selected_medicine_dose_option,
                "strength": selected_medicine_option.match(/\-\s(\w+[\.\d+\w+\s]*)$/)[1]
            }

            let input = document.querySelector("#search_item_input")
            input.value = ""

            this.setState({
                selected_medicine_option: "",
                selected_medicine_dose_option: "",
                start_date: null,
                end_date: null
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