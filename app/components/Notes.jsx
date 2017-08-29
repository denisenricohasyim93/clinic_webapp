import React, { Component } from 'react';
import AddNote from './AddNote'
import moment from 'moment'

class Notes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_create_notes_panel: false
        }
    }

    render() {
        return (
            <div className="patient_profile_route">
                {this.state.show_create_notes_panel
                    ? <AddNote
                        close_create_notes_panel={this.close_create_notes_panel.bind(this)}
                        add_note={this.props.add_note}
                        patient={this.props.patient}
                    /> : ""}
                <div id="create_note_btn_container">
                    <button id="create_note_btn"
                        onClick={() => this.show_create_notes_panel()}><i className="fa fa-plus"></i>
                    </button>
                    <button onClick={() => this.expand_recent_notes()}>Expand All</button>
                </div>


                {this.show_notes(this.props)}
            </div>
        );
    }

    show_create_notes_panel() {
        this.setState({ show_create_notes_panel: true })
        this.props.darken()
    }

    close_create_notes_panel() {
        this.setState({ show_create_notes_panel: false })
        this.props.darken()
    }

    show_notes() {
        return <div id="notes_container">
            {this.props.patient.notes.map((note, x) =>
                <div key={x} className="note" onClick={(e) => this.expand_note(e.target)}>
                    <span id="note_date">{note.date}</span>
                    <span>{note.title}</span>
                    <div id="note_content">{note.content}</div>
                </div>)
            }
        </div>
    }

    expand_note(e) {
        if (e.className !== "note") {
            let parent = e.parentNode
            return parent.lastChild.classList.toggle("show")
        }
        e.childNodes[2].classList.toggle("show")
    }

    expand_recent_notes(e) {
        let notes = document.querySelectorAll(".note")
        Array.prototype.map.call(notes, ((note) => this.expand_note(note)))
    }
}

export default Notes;
