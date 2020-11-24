import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import React, { useState } from 'react';

// import { Container } from './styles';

const CheckBoxList: React.FC = () => {
  const [checkedList, setCheckedList] = useState();
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Jogos"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={checkedList} name="checkedA" />
        }
        label="Filmes"
      />
    </FormGroup>
  );
};

export default CheckBoxList;
