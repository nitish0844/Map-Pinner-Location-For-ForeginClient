import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ChatBot = () => {
  const navigation = useNavigation();

  //   const onButtonPress = () => {
  //     navigation.navigate('ChatCrips', {
  //       uri: 'https://go.crisp.chat/chat/embed/?website_id=a8fcd120-1b98-4e79-90b7-cc02a26163a1',
  //     });
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.floatingButton}>
        {/* Your floating button content */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen')}
          activeOpacity={0.8}
          style={styles.touchable}>
          <AntDesign
            name="customerservice"
            size={30}
            color={'#fff'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16, // Adjust this value to set the vertical position of the button
    right: 16, // Adjust this value to set the horizontal position of the button
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue', // Change this to your desired button color
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6B46E4',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
