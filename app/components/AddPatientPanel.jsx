import React, { Component } from 'react';

class AddPatientPanel extends Component {
    render() {
        return (
            <div id="add_patient_container">
                <button id="close_patient_panel_btn" onClick={this.props.close_patient_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>  </button>
            </div>
        );
    }
}

{/* 
    <input type="text" placeholder="name" name="name" />
    <input type="date" placeholder="birthyear" defaultValue="1990-01-01" name="date" />
    <select name="gender">
        <option>Male</option>
        <option>Female</option>
    </select>
    <input type="text" placeholder="address" name="address" />
 */}
export default AddPatientPanel;