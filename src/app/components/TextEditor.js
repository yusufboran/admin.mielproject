import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor() {
  const [state, setState] = React.useState({
    content: "",
    urlImage: "",
  });
  const _handleEditorChange = (e) => {
    setState({ ...state, content: e });
  };

  return (
    <Editor
      apiKey={`0l9ca7pyz0qyliy0v9mmkfl2cz69uodvc8l6md8o4cnf6rnc`}
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        selector: "#tinymce",
        branding: false,
        height: 600,
        menubar: true,
        config: {},
        content_style: "img { float: left; margin-right: 10px; }",
        images_upload_base_path: "https://mielproje.com.tr/api/upload.php",
        images_upload_credentials: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar: `undo redo| fontsizeselect link image | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat  | help`,
        image_title: true,
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: function (callback, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.onchange = function () {
            var file = this.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "https://mielproje.com.tr/api/upload.php", true);
              xhr.onload = function () {
                if (xhr.status === 200) {
                  var json = JSON.parse(xhr.responseText);
                  if (json.status === "success") {
                    console.log(json.url);
                    callback(json.url);
                  }
                }
              };
              var formData = new FormData();
              formData.append("file", file);
              xhr.send(formData);
            };
          };
          input.click();
        },
      }}
      onEditorChange={(e) => _handleEditorChange(e)}
      value={state.saved ? "" : state.content}
    />
  );
}

export default TextEditor;
