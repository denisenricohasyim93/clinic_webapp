import React, { Component } from 'react';
import AddLabDetailsPanel from './AddLabDetailsPanel'

class Lab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lab_analysis_list: [],
            lab_details: [],
            add_lab_details_panel: false,
            selected_options: []
        }
    }

    componentDidMount() {
        this.construct_lab_list()
        this.construct_lab_details()
    }

    componentWillReceiveProps(nextProps) {
        this.construct_lab_list()
        this.construct_lab_details()
    }


    render() {
        return (
            <div className="patient_profile_route">
                <div id="lab_container">
                    <div id="lab_analysis_container">
                        <div id="lab_analysis_list_container">
                            <strong>Lab analysis list</strong>
                            {this.render_lab_analysis_list()}
                        </div>

                        <div id="lab_analysis_unit_container">
                            <strong>Unit</strong>
                            {this.render_lab_unit_list()}
                        </div>
                    </div>

                    <div id="patient_lab_details_container">
                        {this.render_columns()}
                    </div>

                    <button id="add_lab_details_btn" onClick={() => this.toggle_add_lab_panel()}>
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </button>

                    {
                        this.state.add_lab_details_panel
                            ? <AddLabDetailsPanel
                                construct_lab={this.construct_lab.bind(this)}
                                set_selected_option={this.set_selected_option.bind(this)}
                                lab_list={this.props.lab_list}
                                toggle_add_lab_panel={this.toggle_add_lab_panel.bind(this)} />
                            : ""
                    }
                </div>
            </div>
        );
    }

    construct_lab(lab_obj) {
        this.setState({ selected_options: [] })
        this.props.add_lab_item(lab_obj, this.props.patient, "lab")

        return this.toggle_add_lab_panel()
    }

    set_selected_option(option) {
        let new_selected_options = this.state.selected_options
        new_selected_options.push(option)

        this.setState({ selected_options: new_selected_options })
    }

    toggle_add_lab_panel() {
        this.state.add_lab_details_panel
            ? this.setState({ add_lab_details_panel: false })
            : this.setState({ add_lab_details_panel: true })

        this.props.darken()
    }

    render_lab_unit_list() {
        <div id="lab_analysis_unit_container"> </div>
    }

    render_lab_analysis_list() {
        return <div id="lab_analysis_div_container">
            {this.state.lab_analysis_list.map((item, x) =>
                <div id="lab_analysis_div" key={x}>{item}</div>)}
        </div>
    }

    render_columns() {
        return <div id="patient_lab_columns_container">
            {this.state.lab_details.map((lab, x) =>
                <div key={x} id="patient_lab_column">
                    <strong>{lab.date}</strong>
                    {
                        this.state.lab_analysis_list.map((lab_analysis_item, z) =>
                            this.render_lab_analysis_div(lab, lab_analysis_item, z)
                        )
                    }
                </div>)}
        </div>
    }

    render_lab_analysis_div(lab, lab_analysis_item, key) {
        let filtered_tests = lab.tests.filter((test) => { return test.name === lab_analysis_item })

        return filtered_tests.length > 0
            ? <div key={key} id="lab_test_exists">{filtered_tests[0]["result"]}</div>
            : <div key={key} id="lab_test_not_exists"></div>
    }

    construct_lab_list() {
        let lab_analysis_list = this.state.lab_analysis_list.slice()

        this.props.patient.lab.map((lab, x) =>
            lab.tests.map((test, z) =>
                lab_analysis_list.indexOf(test.name) === -1
                    ? lab_analysis_list.push(test.name)
                    : null
            )
        )

        lab_analysis_list = lab_analysis_list.sort((a, b) => {
            return a > b ? 1 : a < b ? -1 : 0
        })

        return this.setState({ lab_analysis_list: lab_analysis_list })
    }

    construct_lab_details() {
        this.setState({
            lab_details: this.props.patient.lab.sort(function (a, b) {
                return a["date"] < b["date"] ? 1 : a["date"] > b["date"] ? -1 : 0;
            })
        })
    }
}

export default Lab;
