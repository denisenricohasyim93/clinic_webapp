import React, { Component } from 'react';
import Searchable from '../../Util/Searchable';

class AddLabDetailsPanel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="add_lab_details_panel_container">
                <button onClick={() => this.props.toggle_add_lab_panel()} id="add_lab_details_panel_close_btn">X</button>
                <div id="lab_dropdown_container">
                    <Searchable
                        options_list={this.props.lab_list}
                        //set_selected_option={this.set_selected_lab_option.bind(this)}
                        category="lab" />

                </div>
                <input type="text" name="lab_result_input" placeholder="result" />
            </div>
        );
    }
}

export default AddLabDetailsPanel;