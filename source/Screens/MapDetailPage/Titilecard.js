import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Titilecard = ({locationData}) => {
  const navigation = useNavigation();

  const handleCallButtonPress = () => {
    if (locationData.number) {
      Linking.openURL(`tel:${locationData.number}`);
    }
  };

  const handleShareButtonPress = () => {
    Share.share({
      message: `Check out ${locationData.name} at ${locationData.number}`,
    });
  };

  const handleNavigationButtonPress = () => {
    const {latitude, longitude, name} = locationData;
    navigation.navigate('NavigationScreen', {
      destinationLocation: {latitude, longitude}, // Destination location
      DestinationName: name,
    });
  };

  return (
    <View>
      <View style={styles.TitleContainer}>
        <Text style={styles.TitleName}>{locationData.name}</Text>
        <View style={styles.ButtonContainer}>
          {locationData.number && (
            <TouchableOpacity
              onPress={handleCallButtonPress}
              style={styles.CallButtonContainer}>
              <Ionicons name="call-outline" size={20} color="#fff" />
              <Text style={styles.ButtonText}>Call</Text>
            </TouchableOpacity>
          )}
          {locationData.number && (
            <TouchableOpacity
              onPress={handleShareButtonPress}
              style={styles.ShareButtonContainer}>
              <Ionicons name="share-social-outline" size={20} color="#288EFF" />
              <Text style={[styles.ButtonText, {color: '#288EFF'}]}>Share</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={handleNavigationButtonPress}
            style={[
              styles.CallButtonContainer,
              {left: 10, width: '30%', backgroundColor: '#6B46E4'},
            ]}>
            <Ionicons name="navigate-outline" size={20} color="#fff" />
            <Text style={[styles.ButtonText, {color: '#fff'}]}>Navigate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleName: {
    color: '#000',
    fontSize: 19,
    fontFamily: 'Pangram-Medium',
  },
  TitleContainer: {
    top: 30,
    left: '5%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 15, // Add space between the buttons
  },
  CallButtonContainer: {
    backgroundColor: '#288EFF',
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'center',
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    marginRight: 10, // Add spacing between buttons horizontally
  },
  ShareButtonContainer: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'center',
    borderRadius: 20,
    height: 30,
    alignItems: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 5, // Add spacing between text and button icon
    fontFamily: 'Pangram-Medium',
  },
});

export default Titilecard;
