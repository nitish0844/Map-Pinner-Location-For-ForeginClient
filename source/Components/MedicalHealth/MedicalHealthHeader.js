import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {useNavigation} from '@react-navigation/native';

const MedicalHealthHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Octicons name="chevron-left" color={'#000'} size={32} />
        </TouchableOpacity>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Medical Health and Support</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    paddingBottom: '5%',
  },
  title: {
    color: '#000',
    fontSize: 18,
    // fontWeight: '700',
    fontFamily: 'Pangram-Medium',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Center the title horizontally
    paddingVertical: 10, // Add padding for spacing
  },
  iconContainer: {
    marginLeft: 10,
    top: '50%',
  },
});

export default MedicalHealthHeader;
