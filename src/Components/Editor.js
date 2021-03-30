// import {useState} from "react/cjs/react.production.min";
import React from "react";
import "../css/Editor.css";

function Editor(props) {
  return (
    <div className="editor">
      <textarea
        className="editorInput"
        value={props.query}
        placeholder="Enter query here"
        onChange={(e) => props.queryChangeHandler(e)}
      />
    </div>
  );
}

export default Editor;
