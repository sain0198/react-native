// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GiftProvider from './context/GiftContext';
import PeopleScreen from './screens/PeopleScreen';
import AddPersonScreen from './screens/AddPersonScreen';
import IdeaScreen from './screens/IdeaScreen';
import AddIdeaScreen from './screens/AddIdeaScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GiftProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="People" component={PeopleScreen} />
          <Stack.Screen name="Add Person" component={AddPersonScreen} />
          <Stack.Screen name="Ideas" component={IdeaScreen} />
          <Stack.Screen name="Add Idea" component={AddIdeaScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GiftProvider>
  );
};

export default App;
