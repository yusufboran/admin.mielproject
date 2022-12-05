import { Editor } from "@tinymce/tinymce-react";
import * as React from "react";
import * as _ from "lodash";

export class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.state = {
      documentName: "Document 1",
      editorContent: '<h2 style="text-align: center;">TinyMCE and React!</h2>',
      displayIsSaving: false,
    };

    this.throttledSaveToServer = _.throttle(() => {
      setTimeout(() => {
        this.debouncedEndSaving();
        console.log(
          "Saved to server",
          this.state.documentName,
          this.state.editorContent
        );
      }, 500);
    }, 500);

    this.debouncedEndSaving = _.debounce(() => {
      this.setState({ displayIsSaving: false });
    }, 1000);
  }

  handleEditorChange(editorContent) {
    this.save({ editorContent });
  }

  handleNameChange(documentName) {
    this.save({ documentName });
  }

  save(newPartialState) {
    this.setState(
      {
        ...newPartialState,
        displayIsSaving: true,
      },
      () => {
        this.throttledSaveToServer();
      }
    );
  }

  componentWillUnmount() {
    this.debouncedEndSaving.cancel();
    this.throttledSaveToServer.cancel();
  }

  render() {
    return (
      <div className="document-editor">
        <Editor
        
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          onEditorChange={this.handleEditorChange}
          value={this.state.editorContent}
          init={{
            selector: '#tinymce',
            branding: false
          }}
        />
      </div>
    );
  }
}
