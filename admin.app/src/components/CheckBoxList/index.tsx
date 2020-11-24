import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

class CheckBoxData {
  constructor(public name: string, public value: string | number) {}
}

interface CheckBoxListProps {
  checkedList: (string | number | null)[];
  setCheckedList(checkedList: (string | number | null)[]): void;
  checkboxItems: CheckBoxData[];
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({
  checkedList,
  setCheckedList,
  checkboxItems,
}) => {
  const handleCheck = (isChecked: boolean, indexItem: number) => {
    const checkList = checkedList;
    checkList[indexItem] = isChecked ? checkboxItems[indexItem].value : null;

    setCheckedList(checkList);
  };
  return (
    <FormGroup>
      {checkboxItems.map((itemCheck, indexCheck) => (
        <FormControlLabel
          key={`${itemCheck.name}${itemCheck.value}`}
          value={itemCheck.value}
          onChange={(_, checked) => handleCheck(checked, indexCheck)}
          control={
            <Checkbox
              color="primary"
              checked={checkedList.includes(itemCheck.value as never)}
              name={itemCheck.name}
            />
          }
          label={itemCheck.name}
        />
      ))}
    </FormGroup>
  );
};

export { CheckBoxList, CheckBoxData };
