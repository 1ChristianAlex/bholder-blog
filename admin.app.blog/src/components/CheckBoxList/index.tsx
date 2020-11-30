import React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

class CheckBoxData {
  constructor(public name: string, public value: string | number) {}
}

interface CheckBoxListProps {
  checkedList: (string | number)[];
  setCheckedList(checkedList: (string | number)[]): void;
  checkboxItems: CheckBoxData[];
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({
  checkedList,
  setCheckedList,
  checkboxItems,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let listChange = [...checkedList];

    if (event.target.checked) {
      listChange.push(event.target.value);
    } else {
      listChange = checkedList.filter(
        (itemChecked) => itemChecked !== event.target.value
      );
    }

    setCheckedList(listChange);
  };

  return (
    <FormGroup>
      {checkboxItems.map((itemCheck) => {
        return (
          <FormControlLabel
            key={`${itemCheck.name}${itemCheck.value}`}
            value={itemCheck.value}
            control={
              <Checkbox
                onChange={handleChange}
                color="primary"
                checked={checkedList.includes(itemCheck.value.toString())}
                name={itemCheck.name}
              />
            }
            label={itemCheck.name}
          />
        );
      })}
    </FormGroup>
  );
};

export { CheckBoxList, CheckBoxData };
