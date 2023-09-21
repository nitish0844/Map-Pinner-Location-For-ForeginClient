import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Titilecard = ({locationData}) => {
  const handleCallButtonPress = () => {
    // Check if the locationData has a valid number
    if (locationData.number) {
      // Use Linking to open the phone dialer with the provided number
      Linking.openURL(`tel:${locationData.number}`);
    }
  };

  const handleShareButtonPress = () => {
    Share.share({
      message: `Check out ${locationData.name} at ${locationData.number}`,
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleName: {
    color: '#000',
    fontSize: 19,
    // fontWeight: '700',
    fontFamily: 'Pangram-Medium',
  },
  TitleContainer: {
    top: 50,
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
    marginRight: 20, // Add spacing between buttons horizontally
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
    fontWeight: 'bold',
    marginLeft: 5, // Add spacing between text and button icon
  },
});

export default Titilecard;
