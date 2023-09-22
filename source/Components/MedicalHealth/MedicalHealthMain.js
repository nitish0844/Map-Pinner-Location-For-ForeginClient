import {View, Text} from 'react-native';
import React from 'react';
import MedicalHealthHeader from './MedicalHealthHeader';
import MedicalHealthData from './MedicalHeaderData';

const MedicalHealthMain = () => {
  return (
    <View>
      <MedicalHealthHeader />
      <MedicalHealthData />
    </View>
  );
};

export default MedicalHealthMain;
