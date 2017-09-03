import React, { Component } from 'react';
import AddLabModule from './AddLabModule'

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

                <button>Create</button>
            </div>
        );
    }
}

export default AddLabDetailsPanel;