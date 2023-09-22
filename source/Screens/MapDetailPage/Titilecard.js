import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Titilecard = ({locationData}) => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0421,
  });

  const requestLocationPermission = async () => {
    try {
      const permissionResult = await check(
        // PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );

      if (permissionResult === RESULTS.GRANTED) {
        // Permission granted, get current location
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setRegion(prevRegion => ({
              ...prevRegion,
              latitude,
              longitude,
            }));

            // console.log('Location updated:', latitude, longitude);
          },
          error => console.error(error),
          {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
        );
      } else {
        const requestResult = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );

        if (requestResult === RESULTS.GRANTED) {
          // Permission granted, get current location
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setRegion(prevRegion => ({
                ...prevRegion,
                latitude,
                longitude,
              }));

              // console.log('Location updated:', latitude, longitude);
            },
            error => console.error(error),
            {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
          );
        } else {
          console.log('Location permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

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

  const handleNavigationButtonPress = () => {
    requestLocationPermission()
      .then(() => {
        const {latitude, longititude} = locationData;
        // Navigate to the screen where you want to display the navigation route
        navigation.navigate('MapScreen', {
          userLocation: region, // User's location
          destinationLocation: {latitude, longititude}, // Destination location
        });
      })
      .catch(error => {
        console.error('Error requesting location permission:', error);
      });
    // Implement your navigation logic here, using the region state or any other data you need.
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
    fontWeight: 'bold',
    marginLeft: 5, // Add spacing between text and button icon
  },
});

export default Titilecard;
