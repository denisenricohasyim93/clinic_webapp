import React, { Component } from 'react';
import AddLabModule from './AddLabModule';
import moment from 'moment';

class AddLabDetailsPanel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="add_lab_details_panel_container">
                <button onClick={() => this.props.toggle_add_lab_panel()} id="add_lab_details_panel_close_btn">X</button>

                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />
                <AddLabModule lab_list={this.props.lab_list}
                    set_selected_option={this.props.set_selected_option}
                    category="lab" />

                <button id="create_lab_btn" onClick={() => this.construct_lab_details()}>Create</button>
            </div>
        );
    }

    construct_lab_details() {
        let lab_results = document.querySelectorAll('input[name="lab_result_input"]'),
            lab_names = document.querySelectorAll("#search_item_input"),
            tests = [];

        for (let i = 0; i < lab_names.length; i++) {
            if (lab_results[i].value && lab_names[i].value) {
                tests.push({
                    "name": lab_names[i].value.trim(),
                    "result": lab_results[i].value
                })
            }
        }

        let lab_obj = {
            "date": moment().format("YYYY-MM-DD"), // h:mm:ss a for later
            "tests": tests
        }
        return this.props.construct_lab(lab_obj);
    }
}

export default AddLabDetailsPanel;