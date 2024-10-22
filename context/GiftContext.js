
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export const GiftContext = createContext();

const GiftProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadPeople();
  }, []);

  const loadPeople = async () => {
    const storedPeople = await AsyncStorage.getItem('people');
    if (storedPeople) {
      setPeople(JSON.parse(storedPeople));
    }
  };

  const addPerson = async (name, dob) => {
    const newPerson = {
      id: uuidv4(),
      name,
      dob,
      ideas: [],
    };
    const updatedPeople = [...people, newPerson];
    setPeople(updatedPeople);
    await AsyncStorage.setItem('people', JSON.stringify(updatedPeople));
  };

  const getIdeasByPersonId = (id) => {
    const person = people.find(p => p.id === id);
    return person ? person.ideas : [];
  };

  const addIdea = async (personId, idea) => {
    const updatedPeople = people.map(person => {
      if (person.id === personId) {
        return {
          ...person,
          ideas: [...person.ideas, { id: uuidv4(), ...idea }],
        };
      }
      return person;
    });
    setPeople(updatedPeople);
    await AsyncStorage.setItem('people', JSON.stringify(updatedPeople));
  };

  return (
    <GiftContext.Provider value={{ people, addPerson, getIdeasByPersonId, addIdea }}>
      {children}
    </GiftContext.Provider>
  );
};

export default GiftProvider;
