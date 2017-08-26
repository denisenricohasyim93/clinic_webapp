import React, { Component } from 'react';

class AddNote extends Component {
    render() {
        return (
            <div className="add_note_sidebar">
                <button onClick={() => this.construct_note(this.props)}>Add note</button>
                <input type="text" placeholder="Title" name="note_title" />
                <input type="text" placeholder="Date" name="note_date" />
                <textarea name="note_content"></textarea>
            </div>
        );
    }
}

export default AddNote;

