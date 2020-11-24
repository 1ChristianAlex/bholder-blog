import React, { useContext, useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { ChipItem, PaperBholder } from '../../../components';
import { TitlePublish, ChipContainer, ChipInput } from './styles';
import { EditPostContext } from './EditPostProvider';

const KeywordSection: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  const { keywordList, setKeywordlist } = useContext(EditPostContext);

  const removeChipList = (indexChip: number) => {
    setKeywordlist(
      keywordList.filter(
        (chipItem, indexItem) => indexChip !== indexItem && Boolean(chipItem)
      )
    );
  };

  const handleInputKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyAction = [13, 32, 188];

    if (keyAction.includes(event.keyCode)) {
      if (inputValue?.trim()) {
        setKeywordlist([...keywordList, inputValue]);
        setInputValue('');
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <PaperBholder>
      <Grid container direction="column" spacing={1}>
        <Grid item xs>
          <TitlePublish>Palavras Chaves</TitlePublish>
        </Grid>
        <Grid item xs>
          <Divider />
        </Grid>
        <Grid item xs>
          <ChipContainer>
            {keywordList.map(
              (chipName, index) =>
                chipName && (
                  <ChipItem
                    key={`${chipName}${index}`}
                    label={chipName}
                    onDelete={() => removeChipList(index)}
                  />
                )
            )}
            <ChipInput
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleInputKey}
            />
          </ChipContainer>
        </Grid>
      </Grid>
    </PaperBholder>
  );
};

export default KeywordSection;
