import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {createDrawerNavigator} from '@react-navigation/drawer';
import VersionCheck from 'react-native-version-check';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ShelterData} from '../assets/Data/Data';
import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';

const Drawer = createDrawerNavigator();

const MapScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const destinationLocation = params?.destinationLocation;
  const userLocation = params?.userLocation;

  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // When the destinationLocation changes, set it as the selected destination
    if (destinationLocation) {
      setSelectedDestination(destinationLocation);
      setIsNavigating(true);
    }
  }, [destinationLocation]);

  const MapContent = React.memo(() => {
    // const MapContent = () => {
    const navigation = useNavigation();

    // console.log(destinationLocation, userLocation);

    const GOOGLE_MAPS_APIKEY = 'AIzaSyBDDOr5YH_yg0l3PBdFT4aC33khrAsW_j8';

    const markerCoordinate = {
      latitude: 45.512794,
      longitude: -122.679565,
      latitudeDelta: 0.50001,
      longitudeDelta: 0.50001,
    };

    const handleMarkerPress = item => {
      // Navigate to the MapDetails screen with the selected location data
      navigation.navigate('MapDetails', {selectedLocation: item});
    };

    const renderMarkers = () => {
      return ShelterData.map((item, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.latitude,
            longitude: item.longititude,
          }}
          title={item.name}
          pinColor="#00FF5E"
          description={item.description}>
          <Callout
            onPress={() => handleMarkerPress(item)}
            style={styles.calloutContainer}>
            <Text style={{fontFamily: 'Pangram-Regular', fontSize: 13}}>
              {item.name}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Pangram-Regular',
                fontSize: 13,
              }}>
              {item.description}
            </Text>
          </Callout>
        </Marker>
      ));
    };

    const renderNavigationRoute = () => {
      if (userLocation && selectedDestination && isNavigating) {
        try {
          const destinationString = `${selectedDestination.latitude},${selectedDestination.longitude}`;
          return (
            <MapViewDirections
              origin={userLocation}
              destination={destinationString}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="#6B46E4"
              optimizeWaypoints={true}
            />
          );
        } catch (error) {
          console.error('Error rendering navigation route:', error);
        }
      }
      return null;
    };

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />

        <View style={styles.mapContainer}>
          <MapView style={styles.map} initialRegion={markerCoordinate}>
            {renderMarkers()}
            {renderNavigationRoute()}
          </MapView>
        </View>
      </View>
    );

    // return (
    //   <View style={styles.container}>
    //     <StatusBar backgroundColor="#000" barStyle="light-content" />

    //     <View style={styles.mapContainer}>
    //       <MapView style={styles.map} initialRegion={markerCoordinate}>
    //         {ShelterData.map((item, index) => (
    //           <Marker
    //             key={index}
    //             coordinate={{
    //               latitude: item.latitude,
    //               longitude: item.longititude,
    //             }}
    //             title={item.name}
    //             pinColor="#00FF5E"
    //             description={item.description}>
    //             <Callout
    //               onPress={() => handleMarkerPress(item)}
    //               style={styles.calloutContainer}>
    //               {/* Add this View container */}
    //               <Text style={{fontFamily: 'Pangram-Regular', fontSize: 13}}>
    //                 {item.name}
    //               </Text>
    //               <Text
    //                 style={{
    //                   textAlign: 'center',
    //                   fontFamily: 'Pangram-Regular',
    //                   fontSize: 13,
    //                 }}>
    //                 {item.description}
    //               </Text>
    //             </Callout>
    //           </Marker>
    //         ))}
    //       </MapView>
    //     </View>
    //   </View>
    // );
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 22, // Customize the font size
          // fontWeight: 'bold', // Customize the font weight
          fontFamily: 'Pangram-Medium',
        },
        headerStyle: {
          backgroundColor: '#6B46E4', // Set the background color here
        },
        headerTintColor: '#fff', // Set the text color

        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen name="Shelter Connect" component={MapContent} />
    </Drawer.Navigator>
  );

  function DrawerContent() {
    const [version, getVersion] = useState();

    const fetchVersion = async () => {
      try {
        const currentVersion = await VersionCheck.getCurrentVersion();
        getVersion(currentVersion);
      } catch (error) {
        console.error('Error fetching version:', error);
      }
    };

    fetchVersion();

    return (
      <View style={drawerStyles.container}>
        {/* Profile Image and Name */}
        <View style={drawerStyles.profile}>
          <View style={{backgroundColor: '#fff', borderRadius: 50}}>
            <Image
              source={require('./Admin.png')}
              style={drawerStyles.profileImage}
            />
          </View>
          <Text style={drawerStyles.profileName}>Menu</Text>
        </View>
        {/* List of Place Names */}
        <View style={drawerStyles.placesList}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MapScreen');

              navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <View style={drawerStyles.drawerItem}>
              <Ionicons name="call" size={20} color={'#fff'} />
              <Text style={drawerStyles.placeName}>Resource Locator</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CrisisLines')}>
            <View style={drawerStyles.drawerItem}>
              <Ionicons name="map" size={20} color={'#fff'} />
              <Text style={drawerStyles.placeName}>Crisis Lines</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ShelterProgram')}>
            <View style={drawerStyles.drawerItem}>
              <Ionicons name="ios-home" size={20} color={'#fff'} />
              <Text style={drawerStyles.placeName}>Shelter Programs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('LegalMain')}>
            <View style={drawerStyles.drawerItem}>
              <FontAwesome name="legal" size={20} color={'#fff'} />
              <Text style={drawerStyles.placeName}>Legal Aid Information</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MentalHealthSupport')}>
            <View style={drawerStyles.drawerItem}>
              <FontAwesome5
                name="hand-holding-medical"
                size={20}
                color={'#fff'}
              />
              <Text style={drawerStyles.placeName}>Mental Health Support</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <View style={drawerStyles.drawerItem}>
              <Ionicons name="chatbox" size={20} color={'#fff'} />
              <Text style={drawerStyles.placeName}>Helper Bot</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={drawerStyles.appVersionContainer}>
          <Text style={drawerStyles.appVersionText}>V: {version}</Text>
        </View>
      </View>
    );
  }
};

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B46E4',
    padding: 20,
    paddingTop: 70,
  },
  profile: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'flex-start',
    alignItems: 'center', // Center vertically within the row
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  profileName: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Pangram-Regular',
    marginLeft: 10, // Add some spacing between the image and text

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  placesList: {
    marginTop: 20,
  },
  placeName: {
    fontSize: 16,
    marginBottom: 10,
    marginVertical: 10,
    color: '#fff',
    fontFamily: 'Pangram-Regular',
    left: '20%',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  appVersionContainer: {
    flex: 1,
    alignItems: 'flex-end', // Align to the right
    justifyContent: 'flex-end', // Align to the bottom
    paddingBottom: 20, // Add padding to separate from the bottom
  },
  appVersionText: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'Pangram-Medium',
  },
});

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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default MapScreen;
