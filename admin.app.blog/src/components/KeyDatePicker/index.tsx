import React from 'react';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

interface KeyDatePickerProps {
  selectedDate?: Date;
  handleDateChange(date: Date): void;
}

const KeyDatePicker: React.FC<KeyDatePickerProps> = ({
  selectedDate = new Date(),
  handleDateChange,
}) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDateTimePicker
        clearable
        value={selectedDate}
        placeholder={new Date().toISOString()}
        onChange={(date) => handleDateChange(date?.toDate() || new Date())}
        minDate={new Date()}
        disablePast
        format="DD/MM/yyyy hh:mm:ss"
      />
    </MuiPickersUtilsProvider>
  );
};

export default KeyDatePicker;
