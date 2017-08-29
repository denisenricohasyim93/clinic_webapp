import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="dropdown_container"
                onClick={(e) => this.toggle_select_dropdown_option(e)}>

                <div id="dropdown_selected_option">
                    {this.props.selected_option}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>

                <div id={`dropdown_options_container`}>
                    {this.props.items.map((item, x) =>
                        <div key={x} id="dropdown_option" onClick={(e) =>
                            this.props.set_selected_option(e.target.textContent)}>
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
        if (e.target.nodeName === "I") {
            let parent = e.target.parentNode
            return parent.nextSibling.classList.toggle("show")
        }

        if (e.target.nextSibling.id === "dropdown_options_container") {
            return e.target.nextSibling.classList.toggle("show")
        }

        if (e.target.childNodes[0].nodeName === "STRONG") { return; }

        if (e.target.id === "dropdown_option" && e.target.textContent !== "") {
            this.props.set_selected_option(e.target.textContent)
            return e.target.parentNode.classList.toggle("show")
        }
    }
}

export default DropDown;