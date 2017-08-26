import React, { Component } from 'react';

class Notes extends Component {
    render() {
        return (
            <div className="patient_profile_route notes_route">
                {this.show_notes(this.props)}
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
                <div key={x} className="note" onClick={(e) => this.expand_note(e)}>
                    <span id="note_date">Date: {note.date}</span>
                    <span>{note.title}</span>
                    <div id="note_content">{note.content}</div>
                </div>)
            }
        </div>
    }

    expand_note(e) {
        if (e.target.className !== "note") {
            let parent = e.target.parentNode
            return parent.lastChild.classList.toggle("show")
        }
        e.target.childNodes[2].classList.toggle("show")
    }
}

export default Notes;
