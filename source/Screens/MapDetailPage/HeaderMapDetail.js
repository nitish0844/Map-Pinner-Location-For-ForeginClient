import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const HeaderMapDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Octicons name="chevron-down" color={'#000'} size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 18,
    top: 22,
    fontWeight: '700',
  },
  TitleContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    // marginLeft: 10,
    left: 10,
    marginTop: 20,
  },
  IconContainer: {
    right: 20,
    top: 20,
  },
});

export default HeaderMapDetail;
