
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PersonItem = ({ person, onPress }) => {
  const date = new Date(person.dob);
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{person.name}</Text>
        <Text>{`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PersonItem;
