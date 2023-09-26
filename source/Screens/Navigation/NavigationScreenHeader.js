import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const NavigationScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Octicons name="chevron-left" color={'#000'} size={25} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Route to community</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Ensure items are in a row
    alignItems: 'center', // Align items vertically
    backgroundColor: '#fff',
    paddingHorizontal: 20, // Add horizontal padding for spacing
    paddingTop: 10, // Add top padding for spacing
    paddingBottom: 20, // Add bottom padding for spacing
    zIndex: 99,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Pangram-Medium',
    right: 10,
  },
  iconContainer: {
    marginRight: 'auto', // Push the icon to the left end
  },
  titleContainer: {
    flex: 1, // Allow the title to take available space
    alignItems: 'center',
  },
});

export default NavigationScreenHeader;
