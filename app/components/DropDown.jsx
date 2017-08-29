import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown_selected_option: ""
        }
    }

    render() {
        return (
            <div id="dropdown_container"
                onClick={(e) => this.toggle_select_dropdown_option(e)}>

                <div id="dropdown_selected_option">
                    {this.state.dropdown_selected_option}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>

                <div id={`dropdown_options_container`}>
                    {this.props.items.map((item, x) =>
                        <div id="dropdown_option" onClick={(e) =>
                            this.setState({ dropdown_selected_option: e.target.textContent })} key={x}>
                            {item}
                        </div>)}

                    <div>
                        <strong contentEditable
                            data-text={`New ${this.props.category}`}
                            onKeyPress={(e) => this.create_new_dropdown_option(e)}>
                        </strong>
                    </div>
                </div>
            </div>
        );
    }

    create_new_dropdown_option(e) {
        if (e.key === "Enter") {
            e.preventDefault()
            this.props.add_dropdown_item(e.target.textContent, this.props.category_list)
            e.target.textContent = ""
        }
    }

    toggle_select_dropdown_option(e) {
        if (e.target.childNodes[0].nodeName === "STRONG") { return; }

        if (e.target.nextSibling.id === "dropdown_options_container") {
            e.target.nextSibling.classList.toggle("show")
        }
    }
}

export default DropDown;