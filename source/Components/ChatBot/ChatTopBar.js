import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';
import {screenWidth} from '../../Utils/Utils';
import {normalize} from '../../Helpers/ResponsiveFonts';

const ChatTopBar = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{}}>
          <Image
            source={require('../../Icons/MessageInputIcons/LeftArrow.png')}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              marginRight: 10,
            }}></View>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: 'PlusJakartaSans-SemiBold',
              fontSize: normalize(4),
              color: 'white',
            }}>
            Physics AI BOT
          </Text>
        </View>
      </View>

      <View style={{marginRight: 20}}></View>
    </SafeAreaView>
  );
};

export default ChatTopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 100 : 100,
    width: screenWidth,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: -5,
  },
  redDot: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: -4,
    right: 2,
    resizeMode: 'contain',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 10,
    marginTop: -15,
  },
});
