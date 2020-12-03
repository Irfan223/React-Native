import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button buttonStyle={{ justifyContent: 'flex-start', backgroundColor: 'white' }} titleStyle={{ color: 'grey' }} onPress={showDatepicker} title={date.toDateString()} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="calendar"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DatePicker;