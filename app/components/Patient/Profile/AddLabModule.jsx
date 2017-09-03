import React, { Component } from 'react';
import Searchable from '../../Util/Searchable';

class AddLabModule extends Component {
    render() {
        return (
            <div>
                <div id="lab_dropdown_container">
                    <Searchable
                        options_list={this.props.lab_list}
                        set_selected_option={this.props.set_selected_option}
                        category="lab" />
                </div>

                <input type="text" name="lab_result_input" placeholder="result" />
            </div>
        );
    }
}

export default AddLabModule;