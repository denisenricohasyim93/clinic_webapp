import React, { Component } from 'react';

class Notes extends Component {
    render() {
        return (
            <div className="patient_profile_route notes_route">
                {this.show_notes(this.props)}

                <div className="add_note_sidebar">
                    <button onClick={() => this.construct_note(this.props)}>Add note</button>
                    <input type="text" placeholder="Title" name="note_title" />
                    <input type="text" placeholder="Date" name="note_date" />
                    <textarea name="note_content"></textarea>
                </div>
            </div >
        );
    }

    construct_note() {
        let date = document.querySelector("input[name=note_date]"),
            title = document.querySelector("input[name=note_title]"),
            content = document.querySelector("textarea[name=note_content]"),

            note = {
                date: date.value,
                title: title.value,
                content: content.value
            }
        this.props.add_note(note, this.props.patient)
    }

    show_notes() {
        return <div id="notes_container">
            {this.props.patient.notes.map((note, x) =>
                <div key={x} className="note">
                    <span id="note_date">Date: {note.date}</span>
                    <span>{note.title}</span>
                </div>)
            }
        </div>
    }
}

export default Notes;
