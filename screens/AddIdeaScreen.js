
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { GiftContext } from '../context/GiftContext';
import * as ImagePicker from 'expo-image-picker';

const AddIdeaScreen = ({ route, navigation }) => {
  const { personId } = route.params;
  const [text, setText] = useState('');
  const [img, setImg] = useState(null); 
  const { addIdea } = useContext(GiftContext);

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera is required!');
      return;
    }


    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri); 
    }
  };

  const handleSave = async () => {
    if (text && img) {
      await addIdea(personId, { text, img });
      navigation.goBack();
    } else {
      Alert.alert('Please provide both text and image');
    }
  };

  return (
    <View>
      <TextInput 
        placeholder="Idea Text" 
        value={text} 
        onChangeText={setText} 
      />
      <Button title="Pick an image" onPress={handleImagePicker} />
      {img && <Image source={{ uri: img }} style={{ width: 100, height: 150 }} />}
      <Button title="Save Idea" onPress={handleSave} />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddIdeaScreen;

