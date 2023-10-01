import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LocationDetails = ({locationData}) => {
  const handlePhoneNumberPress = phoneNumber => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openWebsite = () => {
    if (locationData.website) {
      Linking.openURL(locationData.website);
    }
  };
  return (
    // <ScrollView contentContainerStyle={styles.flatListContentContainer}>
    <View style={{left: '5%', top: '8%'}}>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name="location-outline" size={22} color={'#288EFF'} />
        <Text style={styles.Address}>{locationData.address}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <FontAwesome5 name="globe-americas" size={20} color={'#288EFF'} />
        <TouchableOpacity onPress={openWebsite}>
          <Text style={styles.Site}>{locationData.website}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Ionicons name="call-outline" size={21} color={'#288EFF'} />
        <Text onPress={handlePhoneNumberPress} style={styles.Address}>
          {locationData.number}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 25}}>
        <Ionicons name="duplicate-outline" size={21} color={'#288EFF'} />
        <Text style={styles.Address}>Categories : {locationData.Category}</Text>
      </View>
      <View style={{marginTop: 25}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome5
            name="hand-holding-usd"
            size={20}
            style={{bottom: 5}}
            color={'#288EFF'}
          />
          <Text style={styles.Address}>You can Donate:</Text>
        </View>
        {locationData.Donationitemsinneed.map((item, index) => (
          <Text key={index} style={styles.Donate}>
            {item}
          </Text>
        ))}
      </View>
    </View>
    // </ScrollView>
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
  Donate: {
    color: '#000',
    fontSize: 14,
    top: '2%',
    width: '80%',
    fontFamily: 'Pangram-Regular',
    paddingBottom: '2%',
  },
  flatListContentContainer: {
    paddingBottom: 120, // Add extra bottom height here (adjust as needed)
  },
});

export default LocationDetails;
