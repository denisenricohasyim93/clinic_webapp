import React, { Component } from 'react';

class Searchable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searched_options: []
        }
    }

    render() {
        return (
            <div id="searchable_container">
                <input type="text"
                    placeholder={`search ${this.props.category}`}
                    id="search_item_input"
                    onChange={(e) => this.search_item(e, this.props.options_list)} />

                {this.state.searched_options.length > 0
                    ? this.render_options()
                    : ""}

            </div>
        );
    }

    search_item(e) {
        let value = e.target.value,
            searched_options = []

        if (value === "") {
            return this.setState({
                searched_options: []
            })
        }

        if (value.length > 0) {

            for (let i = 0; i < this.props.options_list.length; i++) {
                let option = this.props.options_list[i],
                    option_name = option.toLowerCase();

                if (option_name.startsWith(value)) {
                    searched_options.push(option)
                }
            }
        }

        return this.setState({
            searched_options: searched_options
        })
    }

    set_option(e) {
        this.props.set_selected_option(e.target.textContent)
        let input = document.querySelector("#search_item_input")
        input.value = e.target.textContent

        return this.setState({ searched_options: [] })
    }

    render_options() {
        return <div id="searchable_options_container">
            {this.state.searched_options.map((option, x) =>
                <div id="found_option" key={x} onClick={(e) => this.set_option(e)}>
                    {option}
                </div>
            )}
        </div>
    }
}

export default Searchable;