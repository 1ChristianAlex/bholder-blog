import React, { FC, useState, useEffect, useRef } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import { useField } from "@rocketseat/unform";
import draftToHtml from "draftjs-to-html";
import { EditorStyle } from "./styled";

interface IDraftArea {
  name: string;
}

const DraftArea: FC<IDraftArea> = ({ name }) => {
  const [draftContent, setDrafContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField } = useField(name);

  const handleChange = (changeState: EditorState) => {
    const currentContent = changeState.getCurrentContent();
    const html = draftToHtml(convertToRaw(currentContent));
    setDrafContent(html);
  };
  useEffect(() => {
    const target = inputRef.current as HTMLInputElement;

    registerField({
      name,
      path: "value",
      ref: target
    });
  }, [name, inputRef]);

  return (
    <>
      <input type="hidden" ref={inputRef} value={draftContent} />
      <Editor editorStyle={EditorStyle} onEditorStateChange={handleChange} />
    </>
  );
};

export default DraftArea;
