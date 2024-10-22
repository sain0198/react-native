
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const IdeaItem = ({ idea }) => {
  return (
    <View>
      <Text>{idea.text}</Text>
      <Image source={{ uri: idea.img }} style={{ width: 100, height: 150 }} />
      <Button title="Delete" />

    </View>
  );
};

export default IdeaItem;
