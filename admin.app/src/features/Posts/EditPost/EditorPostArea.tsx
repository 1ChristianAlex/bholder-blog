import { Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {
  TextEditor,
  TabBar,
  TabItem,
  TextArea,
  PaperBholder,
} from '../../../components';
import { EditPostContext } from './EditPostProvider';

const EditorPostArea: React.FC = () => {
  const { textEditor, setTextValueEditor } = useContext(EditPostContext);

  const onEditorTextChange = (valueText: string) => {
    if (valueText.length > 5) {
      setTextValueEditor(valueText);
    }
  };

  enum tabEnum {
    editor = 1,
    code,
    preview,
  }
  const tabsItems = [
    new TabItem(tabEnum.editor, 'Editor'),
    new TabItem(tabEnum.code, 'Code'),
    new TabItem(tabEnum.preview, 'Preview'),
  ];

  const [tabEditor, setTabEditor] = useState(tabEnum.editor);

  return (
    <PaperBholder>
      <Grid container>
        <Grid item xs={12}>
          <TabBar
            currentTab={tabEditor}
            setCurrentTab={setTabEditor}
            tabsItems={tabsItems}
          />
        </Grid>
        {tabEditor === tabEnum.editor && (
          <Grid item>
            <TextEditor
              editorState={textEditor}
              onChange={onEditorTextChange}
            />
          </Grid>
        )}
        {tabEditor === tabEnum.code && (
          <Grid item xs={12}>
            <TextArea
              textEditor={textEditor}
              setTextValueEditor={setTextValueEditor}
            />
          </Grid>
        )}
        {tabEditor === tabEnum.preview && (
          <Grid item xs={12}>
            <div dangerouslySetInnerHTML={{ __html: textEditor }}></div>
          </Grid>
        )}
      </Grid>
    </PaperBholder>
  );
};

export default EditorPostArea;
