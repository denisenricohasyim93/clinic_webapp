import React, { Component } from 'react';

class BookPanel extends Component {
    render() {
        return (
            <div id="book_panel_container">
                <button id="close_book_panel_btn" onClick={this.props.close_book_panel}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </button>

                <div id="book_panel_fields">
                    <select>
                        <option></option>
                        {this.props.patients.map((patient) => <option>
                            {patient.name}</option>)}
                    </select>

                    <input placeholder="title" />

                    <textarea placeholder="description..."></textarea>

                    <button onClick={() => this.construct_appointment()}>Create</button>
                </div>

            </div >
        );
    }

    construct_appointment() {

    }
}

export default BookPanel;