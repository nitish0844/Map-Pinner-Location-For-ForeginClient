import {View, Text} from 'react-native';
import React from 'react';
import ShelterHeader from './ShelterHeader';
import ShelterProgramFlatList from './ShelterProgramFlatList';

const ShelterProgramMain = () => {
  return (
    <View>
      <ShelterHeader />
      <ShelterProgramFlatList />
    </View>
  );
};

export default ShelterProgramMain;
