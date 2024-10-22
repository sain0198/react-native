
import React, { useContext } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { GiftContext } from '../context/GiftContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PersonItem from '../components/PersonItem';

const PeopleScreen = ({ navigation }) => {
  const { people } = useContext(GiftContext);

  return (
    <View>
      {people.length === 0 ? (
        <Text>No people added. Please add a first person.</Text>
      ) : (
        <FlatList
          data={people.sort((a, b) => new Date(a.dob) - new Date(b.dob))}
          renderItem={({ item }) => (
            <PersonItem person={item} onPress={() => navigation.navigate('Ideas', { id: item.id })} />
          )}
          keyExtractor={item => item.id}
        />
      )}
      <Button title="Add Person" onPress={() => navigation.navigate('Add Person')} />
    </View>
  );
};

export default PeopleScreen;
