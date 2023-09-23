import {Dimensions, Platform, StatusBar} from 'react-native';

export const screenWidth = Dimensions.get('screen').width;

export const screenHeight = Dimensions.get('screen').height;

export const windowHeight = Dimensions.get('window').height;

export const windowWidth = Dimensions.get('window').width;

export const safeAreaViewAndroid =
  Platform.OS === 'android' && StatusBar.currentHeight;

export const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export const getAvatarInitials = textString => {
  if (!textString) return '';
  const text = textString.trim();
  const textSplit = text.split(' ');
  if (textSplit.length <= 1) return text.charAt(0);
  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);
  return initials;
};

