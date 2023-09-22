import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import OnBoardScreen from './source/Screens/OnBoardScreen';
import MapScreen from './source/Screens/MapScreen';
import MapDetails from './source/Screens/MapDetailPage/MapDetails';
import ChatScreen from './source/Components/ChatBot/ChatScreen';
import ShelterProgramMain from './source/Components/Shelter Program/ShelterProgramMain';
import LegalMain from './source/Components/LegalInformation/LegalMain';
import MedicalHealthMain from './source/Components/MedicalHealth/MedicalHealthMain';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const RootNavigator = () => {
    // const MainStack = () => {
    //   return (
    //     <Stack.Navigator
    //       // initialRouteName="Sliding"
    //       screenOptions={{headerShown: false}}>
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="EnterOtp" component={EnterOtp} />
    //     </Stack.Navigator>
    //   );
    // };

    return (
      <Stack.Navigator>
        {/* <Stack.Screen
          name="OnBoardScreen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        /> */}
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
      </Stack.Navigator>
    );
  };
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
