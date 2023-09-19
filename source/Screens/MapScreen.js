import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const data = [
  {
    name: 'Family Promise of Beaverton',
    number: '+19712178949',
    description: 'Homeless shelter',
    latitude: 45.532531777651904,
    longititude: -122.83305785767608,
  },
  {
    name: 'Community of Hope',
    number: '+19712694093',
    description: 'Non-profit organization',
    latitude: 45.5959701574567,
    longititude: -122.75267510500011,
  },
  {
    name: 'Family Promise',
    number: '+19712178949',
    description: 'Homeless shelter',
    latitude: 45.597232637657484,
    longititude: -122.7533968256706,
  },
  {
    name: 'Community Action Family Shelter',
    number: '+15036403263',
    description: 'Social services organization',
    latitude: 45.53389011546534,
    longititude: -122.97003263306073,
  },
  {
    name: 'Transitional Youth',
    number: '+15033507215',
    description: 'Youth organization',
    latitude: 45.54062352219676,
    longititude: -122.85055631685724,
  },
  {
    name: 'Rose Haven Day Shelter and Community Center',
    number: '+15032486364',
    description: 'Community center',
    latitude: 45.533409126988616,
    longititude: -122.68850797993757,
  },
  {
    name: 'Washington County Resource Center',
    number: '+15036490367',
    description: 'Social services organization',
    latitude: 45.51320389624091,
    longititude: -122.8471230893801,
  },
];

const MapContent = React.memo(() => {
  const markerCoordinate = {
    latitude: 45.512794,
    longitude: -122.679565,
    latitudeDelta: 0.50001,
    longitudeDelta: 0.50001,
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
              description={item.description}
            />
          ))}
        </MapView>
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
            <TouchableOpacity>
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
