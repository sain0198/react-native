
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { GiftContext } from '../context/GiftContext';

const AddPersonScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const { addPerson } = useContext(GiftContext);

  const handleSave = async () => {
    if (name && dob) {
      await addPerson(name, dob);
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Please provide both name and date of birth');
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <DatePicker
        date={dob}
        onDateChange={setDob}
      />
      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddPersonScreen;
