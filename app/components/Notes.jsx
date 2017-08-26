import React, { Component } from 'react';
import moment from 'moment'

class Notes extends Component {
    render() {
        return (
            <div className="patient_profile_route">

                <div id="create_note_container">
                    <input type="text" name="create_note_title" placeholder="title" />
                    <input type="text" name="create_note_content" placeholder="content" />
                    <button onClick={() => this.construct_note()}>Create</button>
                </div>

                {this.show_notes(this.props)}
            </div>
        );
    }

    construct_note() {
        let title = document.querySelector("input[name=create_note_title]"), content = document.querySelector("input[name=create_note_content]")

        if (!title.value.match(/^\s*$/) && !content.value.match(/^\s*$/)) {

            let note = {
                date: moment().format("MMM Do YYYY"),
                title: title.value,
                content: content.value
            }

            title.value = "", content.value = ""
            this.props.add_note(note, this.props.patient, "notes")
        }

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
