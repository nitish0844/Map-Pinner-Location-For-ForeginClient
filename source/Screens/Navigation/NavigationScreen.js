import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Platform,
  SafeAreaView,
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker} from 'react-native-maps';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import NavigationScreenHeader from './NavigationScreenHeader';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBDDOr5YH_yg0l3PBdFT4aC33khrAsW_j8';

const LATITUDE_DELTA = 70.922;
const LONGITUDE_DELTA = 0.00421;

const NavigationScreen = ({route}) => {
  const {destinationLocation, DestinationName} = route.params;
  const [loading, setLoading] = useState(true);
  const [showRoute, setShowRoute] = useState(false);
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA - 65,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const sourceMarker = {
    latitude: region.latitude,
    longitude: region.longitude,
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const permissionResult = await check(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );

        if (permissionResult === RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setRegion(prevRegion => ({
                ...prevRegion,
                latitude,
                longitude,
                latitudeDelta: 0.1525,
                longitudeDelta: 0.1525,
              }));
              setLoading(false);
              setShowRoute(true);
            },
            error => console.error(error),
            {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
          );
        } else {
          const requestResult = await request(
            PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
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
                  latitudeDelta: LATITUDE_DELTA - 65,
                  longitudeDelta: LONGITUDE_DELTA,
                }));
                setLoading(false);
                setShowRoute(true);
              },
              error => console.error(error),
              {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
            );
          } else {
          }
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      try {
        const permissionResult = await check(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );

        if (permissionResult === RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setRegion(prevRegion => ({
                ...prevRegion,
                latitude,
                longitude,
                latitudeDelta: 0.1525,
                longitudeDelta: 0.1525,
              }));
              setLoading(false);
              setShowRoute(true);
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
                  latitudeDelta: 0.0122,
                  longitudeDelta: 0.0421,
                }));
                setLoading(false);
                setShowRoute(true);
              },
              error => console.error(error),
              {enableHighAccuracy: true, timeout: 30000, maximumAge: 10000},
            );
          } else {
          }
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <NavigationScreenHeader />
      <View style={styles.mapContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" style={styles.loader} />
        ) : (
          region.latitude !== 0 &&
          region.longitude !== 0 && (
            <MapView
              style={styles.map}
              initialRegion={region}
              showsUserLocation={true}>
              {showRoute && destinationLocation ? (
                <>
                  {/* Source Marker (Red) */}
                  <Marker coordinate={sourceMarker} pinColor="red"></Marker>

                  {/* Destination Marker (Green) */}
                  <Marker coordinate={destinationLocation} pinColor="green">
                    <View
                      style={[
                        styles.customMarker,
                        {
                          backgroundColor: 'green',
                          width: 120,
                          shadowColor: 'black',
                          shadowOffset: {width: 0, height: 2},
                          shadowOpacity: 0.5,
                          elevation: 5,
                        },
                      ]}>
                      <Text style={styles.customMarkerText}>
                        {DestinationName}
                      </Text>
                    </View>
                  </Marker>

                  <MapViewDirections
                    origin={sourceMarker}
                    destination={destinationLocation}
                    apikey={GOOGLE_MAPS_API_KEY}
                    strokeWidth={6}
                    strokeColor="#4169E1"
                    optimizeWaypoints={true}
                  />
                </>
              ) : (
                <Marker coordinate={destinationLocation} pinColor="green">
                  <View
                    style={[
                      styles.customMarker,
                      {
                        backgroundColor: 'green',
                        width: 120,
                        shadowColor: 'black',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.5,
                        elevation: 5,
                      },
                    ]}>
                    <Text style={styles.customMarkerText}>
                      {DestinationName}
                    </Text>
                  </View>
                </Marker>
              )}
            </MapView>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // To occupy the entire screen
    alignItems: 'center',
  },
  expandButton: {
    // Your expand button styles here
  },
  mapContainer: {
    flex: 1, // To occupy the available space
    width: '100%',
    // borderRadius: 20,
    overflow: 'hidden',
  },
  map: {
    flex: 1, // To occupy the available space
  },
  customMarker: {
    width: 80,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // To position the stick
  },
  customMarkerText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Pangram-Medium',
    zIndex: 1, // Ensure text is on top
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationScreen;
