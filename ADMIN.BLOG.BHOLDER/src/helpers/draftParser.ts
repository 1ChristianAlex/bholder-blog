import {
  convertToRaw,
  ContentState,
  EditorState
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState as ReactEditorState } from 'react-draft-wysiwyg';

export default class DraftParser {
  draftToHtml(changeState: ReactEditorState) {
    const currentContent = changeState.getCurrentContent();
    const html = draftToHtml(convertToRaw(currentContent));
    return html
  }

  htmlToDraft(draftContent:string) {
    const { contentBlocks, entityMap } = htmlToDraft(draftContent);
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap,
    );
    const state = EditorState.createWithContent(contentState);
    return state;
  }
}
