import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LocationDetails = ({locationData}) => {
  const openWebsite = () => {
    if (locationData.site) {
      Linking.openURL(locationData.site);
    }
  };
  return (
    <View style={{left: '5%'}}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="location-outline" size={22} color={'#288EFF'} />
        <Text style={styles.Address}>{locationData.address}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <FontAwesome5 name="globe-americas" size={20} color={'#288EFF'} />
        <TouchableOpacity onPress={openWebsite}>
          <Text style={styles.Site}>{locationData.site}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Ionicons name="call-outline" size={21} color={'#288EFF'} />
        <Text style={styles.Address}>{locationData.number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Address: {
    color: '#000',
    fontSize: 14,
    // fontWeight: '600',
    marginLeft: 10,
    width: '80%',
    fontFamily: 'Pangram-Regular',
  },
  Site: {
    color: '#000',
    fontSize: 14,
    // fontWeight: '600',
    marginLeft: 10,
    width: '100%',
    fontFamily: 'Pangram-Regular',
  },
});

export default LocationDetails;
