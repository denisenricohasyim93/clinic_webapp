import React, { Component } from 'react';
import DropDown from '../../Util/DropDown';

class Diagnosis extends Component {
    render() {
        return (
            <div id="diagnosis_container">
                <button id="btn_add_diagnosis"
                    onClick={(e) => this.props.create_diagnosis(e)}>
                    Create Diagnosis
            </button>

                <div id="dropdown_diagnosis_container">
                    <DropDown
                        selected_option={this.props.selected_option}
                        set_selected_option={this.props.set_selected_option}
                        category_list={this.props.category_list}
                        add_dropdown_item={this.props.add_dropdown_item}
                        items={this.props.items}
                        category={this.props.category}
                    />
                </div>

                <textarea id="create_diagnosis_treatment" placeholder="treatment"></textarea>
                {this.render_diagnosis()}
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
}

export default Diagnosis;