import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import MapScreen from './source/Screens/MapScreen';
import NavigationScreen from './source/Screens/Navigation/NavigationScreen';
import MapDetails from './source/Screens/MapDetailPage/MapDetails';
import ChatScreen from './source/Components/ChatBot/ChatScreen';
import ShelterProgramMain from './source/Components/Shelter Program/ShelterProgramMain';
import LegalMain from './source/Components/LegalInformation/LegalMain';
import CrisisLineMain from './source/Components/CrisisLines/CrisisLineMain';
import MedicalHealthMain from './source/Components/MedicalHealth/MedicalHealthMain';
import {defaultTheme} from './source/Themes/Themes';
import {PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {
  const RootNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapDetails"
          component={MapDetails}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS, // Apply custom animation
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShelterProgram"
          component={ShelterProgramMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LegalMain"
          component={LegalMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MentalHealthSupport"
          component={MedicalHealthMain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CrisisLineMain"
          component={CrisisLineMain}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const theme = defaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
