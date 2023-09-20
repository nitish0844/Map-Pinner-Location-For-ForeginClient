import React from 'react';
import {View, Text, Image} from 'react-native';
import HeaderMapDetail from './HeaderMapDetail';
import Titilecard from './Titilecard';
import MapImage from './MapImage';
import LocationDetails from './LocationDetails';

const MapDetails = ({route}) => {
  // Access the selectedLocation data from route.params
  const {selectedLocation} = route.params;

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <HeaderMapDetail />
      <Titilecard locationData={selectedLocation} />
      <MapImage locationData={selectedLocation} />
      <LocationDetails locationData={selectedLocation} />
    </View>
  );
};

export default MapDetails;
