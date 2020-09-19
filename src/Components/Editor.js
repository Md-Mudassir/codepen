import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ displayName, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const [open, setOpen] = useState(true);
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <div
          className="icon"
          onClick={() => setOpen((preOpen) => !preOpen)}
        ></div>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: "material",
          mode: language,
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
