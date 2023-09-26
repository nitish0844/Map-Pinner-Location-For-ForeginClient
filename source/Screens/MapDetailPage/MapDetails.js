import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderMapDetail from './HeaderMapDetail';
import Titilecard from './Titilecard';
import LocationDetails from './LocationDetails';
import {ScrollView} from 'react-native-gesture-handler';

const MapDetails = ({route}) => {
  const {selectedLocation} = route.params;

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.flatListContentContainer}
        showsVerticalScrollIndicator={false}>
        <HeaderMapDetail />
        <Titilecard locationData={selectedLocation} />
        <LocationDetails locationData={selectedLocation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingBottom: 150, // Add extra bottom height here (adjust as needed)
  },
});

export default MapDetails;
