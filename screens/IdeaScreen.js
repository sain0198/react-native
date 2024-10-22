
import React, { useContext } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { GiftContext } from '../context/GiftContext';
import IdeaItem from '../components/IdeaItem';

const IdeaScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { getIdeasByPersonId } = useContext(GiftContext);
  const ideas = getIdeasByPersonId(id);

  return (
    <View>
      <Text>Gift Ideas</Text>
      {ideas.length === 0 ? (
        <Text>No ideas added. Please add an idea.</Text>
      ) : (
        <FlatList
          data={ideas}
          renderItem={({ item }) => <IdeaItem idea={item} />}
          keyExtractor={item => item.id}
        />
      )}
      <Button title="Add Idea" onPress={() => navigation.navigate('Add Idea', { personId: id })} />
    </View>
  );
};

export default IdeaScreen;
