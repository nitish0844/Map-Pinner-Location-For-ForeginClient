import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ChatBot from '../Components/ChatBot/ChatBot';

const Drawer = createDrawerNavigator();

const data = [
  {
    name: 'Family Promise of Beaverton',
    number: '+19712178949',
    description: 'Homeless shelter',
    latitude: 45.532531777651904,
    longititude: -122.83305785767608,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Community of Hope',
    number: '+19712694093',
    description: 'Non-profit organization',
    latitude: 45.5959701574567,
    longititude: -122.75267510500011,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Family Promise',
    number: '+19712178949',
    description: 'Homeless shelter',
    latitude: 45.597232637657484,
    longititude: -122.7533968256706,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Community Action Family Shelter',
    number: '+15036403263',
    description: 'Social services organization',
    latitude: 45.53389011546534,
    longititude: -122.97003263306073,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Transitional Youth',
    number: '+15033507215',
    description: 'Youth organization',
    latitude: 45.54062352219676,
    longititude: -122.85055631685724,
    site: 'https://www.google.com',
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Rose Haven Day Shelter and Community Center',
    number: '+15032486364',
    description: 'Community center',
    latitude: 45.533409126988616,
    longititude: -122.68850797993757,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
  {
    name: 'Washington County Resource Center',
    number: '+15036490367',
    description: 'Social services organization',
    latitude: 45.51320389624091,
    longititude: -122.8471230893801,
    address: 'No. 47 James bond Street,Vinchruch cross, Zurich, Switzerland',
    site: 'https://www.google.com',
    image:
      'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/530000/530888/image/6180cb963c774.jpeg',
  },
];

const MapContent = React.memo(() => {
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={markerCoordinate}>
          {data.map((item, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longititude,
              }}
              title={item.name}
              description={item.description}>
              <Callout onPress={() => handleMarkerPress(item)}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <ChatBot />
      </View>
    </View>
  );
});

const MapScreen = () => {
  const navigation = useNavigation();

  const handleExpand = () => {
    navigation.navigate('Location'); // Navigate to another map page
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20, // Customize the font size
          fontWeight: 'bold', // Customize the font weight
        },
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="Map"
        component={MapContent}
        // options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );

  function DrawerContent() {
    const handleLocationClick = item => {
      navigation.navigate('MapDetails', {selectedLocation: item});
    };

    return (
      <View style={drawerStyles.container}>
        {/* Profile Image and Name */}
        <View style={drawerStyles.profile}>
          <Image
            source={require('./custom.png')}
            style={drawerStyles.profileImage}
          />
          <Text style={drawerStyles.profileName}>John Doe</Text>
        </View>

        {/* List of Place Names */}
        <View style={drawerStyles.placesList}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleLocationClick(item)}>
              <Text key={index} style={drawerStyles.placeName}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
};

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placesList: {
    marginTop: 20,
  },
  placeName: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '700',
    marginVertical: 10,
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
