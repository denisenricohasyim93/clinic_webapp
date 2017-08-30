import React, { Component } from 'react';
import moment from 'moment'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';


const EditorComponent = () => <Editor />

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }

    onEditorStateChange(editorState) {
        this.setState({ editorState });
    }


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

                <Editor
                    editorState={this.state.editorState}
                    onEditorStateChange={(val) => this.onEditorStateChange(val)} />

                <button id="create_note_btn" onClick={() => this.construct_note()}>Create</button>
            </div>
        );
    }

    construct_note() {
        let title = document.querySelector("select[name=create_note_title]")

        var contentState = convertToRaw(this.state.editorState.getCurrentContent()),
            markup = draftToHtml(contentState);

        if (!title.value.match(/^\s*$/)) {

            let note = {
                date: moment().format("MM-DD-YYYY"),
                title: title.value,
                content: markup
            }

            console.log(note);

            title.value = ""
            this.setState({ editorState: EditorState.createEmpty() })
            this.props.add_note(note, this.props.patient, "notes")
            this.props.close_create_notes_panel()
        }

    }
}

export default AddNote;

