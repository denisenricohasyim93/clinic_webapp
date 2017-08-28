import React, { Component } from 'react';
import moment from 'moment'

class AddNote extends Component {
    render() {
        return (
            <div id="create_note_container">
                <div id="close_create_note_panel">
                    <button onClick={this.props.close_create_notes_panel} id="close_create_note_btn">X</button>
                </div>
                <select name="create_note_title">
                    <option>title</option>
                    <option>primary Journal</option>
                    <option>out-patient</option>
                    <option>in-patient</option>
                    <option>discharged summary</option>
                    <option>treatment plan</option>
                </select>
                <input type="text" name="create_note_content" placeholder="content" />
                <button id="create_note_btn" onClick={() => this.construct_note()}>Create</button>
            </div>
        );
    }

    construct_note() {
        let title = document.querySelector("select[name=create_note_title]"), content = document.querySelector("input[name=create_note_content]")

        if (!title.value.match(/^\s*$/) && !content.value.match(/^\s*$/)) {

            let note = {
                date: moment().format("DD-MM-YYYY"),
                title: title.value,
                content: content.value
            }

            title.value = "", content.value = ""
            this.props.add_note(note, this.props.patient, "notes")
            this.props.close_create_notes_panel()
        }

    }
}

export default AddNote;

