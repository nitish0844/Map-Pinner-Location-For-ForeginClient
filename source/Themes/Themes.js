import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {colors} from './Colors';

export const defaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    text: 'black',
    backgroundColor: 'white',
    button: colors.primary,
    secondary: colors.secondary,
    border: colors.border,
    borderColor: colors.borderColor,
    graphBackgroundColor: colors.chartLightBackground,
    error: colors.error,
  },
};

export const darkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#0C0C0F',
    text: '#FDFFFF',
    button: colors.primaryDark,
    secondary: '#A0A0A0',
    border: 'white',
    graphBackgroundColor: colors.chartDarkBackground,
    error: colors.error,
  },
};
