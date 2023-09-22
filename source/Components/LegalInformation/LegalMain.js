import {View, Text} from 'react-native';
import React from 'react';
import LegalHeader from './LegalHeader';
import LegalDataFlatList from './LegalDataFlatList';

const LegalMain = () => {
  return (
    <View>
      <LegalHeader />
      <LegalDataFlatList />
    </View>
  );
};

export default LegalMain;
