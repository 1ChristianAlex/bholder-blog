import React, { FC } from "react";
import { CodeArea } from "./styled";

interface ITextArea {
  name: string;
}

const TextArea: FC<ITextArea> = ({ name }) => <CodeArea name={name} />;

export default TextArea;
