import {View, Text} from 'react-native';
import React from 'react';
import CrisisHeader from './CrisisHeader';
import CrisisLinesFlatList from './CrisisLinesFlatList';

const CrisisLineMain = () => {
  return (
    <View>
      <CrisisHeader />
      <CrisisLinesFlatList />
    </View>
  );
};

export default CrisisLineMain;
