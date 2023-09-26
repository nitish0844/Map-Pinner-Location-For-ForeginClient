import {StyleSheet, View, Platform, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import TypeWriter from 'react-native-typewriter';

import {useSelector} from 'react-redux';
// import firestore from '@react-native-firebase/firestore';
import {screenWidth} from '../../Utils/Utils';
// import {fonts} from '../../Themes/Fonts';
import {normalize} from '../../Helpers/ResponsiveFonts';
import FastImage from 'react-native-fast-image';

const AICustomMessage = ({message}) => {
  const data = useSelector(state => state?.UserReducer);

  const updateAITypedMessage = async () => {
    // await firestore()
    //   .collection('THREADS')
    //   .doc(data?.userData?.uid)
    //   .collection('MESSAGES')
    //   .doc(message.id)
    //   .update({
    //     typed: true,
    //   });
  };

  return (
    <View>
      <View style={styles.container}>
        {message?.newType === 'AI' ? (
          message?.typed ? (
            <Text
              style={{
                fontFamily: 'Pangram-Regular',
                lineHeight: 30,
                fontSize: normalize(3.8),
                color: 'white',
              }}>
              {message?.text}
            </Text>
          ) : (
            <TypeWriter
              typing={1}
              onTypingEnd={async () => {
                await updateAITypedMessage();
              }}>
              <Text
                style={{
                  fontFamily: 'Pangram-Regular',
                  lineHeight: 30,
                  fontSize: normalize(3.8),
                  color: 'white',
                }}>
                {message?.text}
              </Text>
            </TypeWriter>
          )
        ) : (
          <Text
            style={{
              fontFamily: 'Pangram-Regular',
              lineHeight: 30,
              fontSize: normalize(3.8),
              color: 'white',
            }}>
            {message?.text}
          </Text>
        )}
      </View>

      {!message?.typed && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={updateAITypedMessage}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              backgroundColor: '#CDF0FB',
              borderRadius: 100,
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Pangram-Regular',
                lineHeight: 30,
                fontSize: normalize(4),
              }}>
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            position: 'relative',
          }}>
          <View>
            <FastImage
              source={require('../../Screens/Admin.png')}
              style={{
                resizeMode: 'contain',
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
            />
          </View>
        </View>
      </View>

      <View style={{marginVertical: 5, marginRight: 10, marginBottom: 50}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Pangram-Regular',
            lineHeight: 30,
            fontSize: normalize(3),
            color: 'white',
          }}></Text>
      </View>
    </View>
  );
};

export default AICustomMessage;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    margin: 10,
    marginHorizontal: 5,
    marginLeft: 45,
    backgroundColor: '#1E1E2E',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    width: screenWidth * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 0.62,
    borderColor: '#CFDEF3',
    borderWidth: Platform.OS === 'android' ? 0.3 : 0.7,
  },
  bottomBorder: {
    padding: 10,
    borderBottomWidth: 1,
    width: screenWidth * 0.75,
  },
});
