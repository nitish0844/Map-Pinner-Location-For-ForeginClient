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

    // const BottomTabs = () => {
    //   return (
    //     <Tab.Navigator
    //       initialRouteName="Feed"
    //       screenOptions={({route}) => ({
    //         // headerStyle: {backgroundColor: '#42f44b'},
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {fontWeight: '800'},
    //         tabBarActiveTintColor: '#FFA500',
    //         tabBarInactiveTintColor: '#fff',
    //         tabBarLabelStyle: {
    //           fontSize: 12,
    //           fontWeight: '700',
    //         },
    //         tabBarStyle: {
    //           backgroundColor: '#1D1D1D',
    //           borderTopColor: '#1D1D1D',
    //           height: 55,
    //         },
    //         tabBarIcon: ({focused, color, size}) => {
    //           let iconName;
    //           let iconComponent;
    //           if (route.name === 'MainPage') {
    //             iconName = 'home-outline';
    //             iconComponent = (
    //               <MaterialCommunityIcons
    //                 name={iconName}
    //                 size={30}
    //                 color={color}
    //               />
    //             );
    //           } else if (route.name === 'Attendence') {
    //             iconName = 'stacked-bar-chart';
    //             iconComponent = (
    //               <MaterialIcons name={iconName} size={25} color={color} />
    //             );
    //           } else if (route.name === 'Paymenttab') {
    //             iconName = 'payment';
    //             iconComponent = (
    //               <MaterialIcons name={iconName} size={25} color={color} />
    //             );
    //           } else if (route.name === 'ProfileTab') {
    //             iconName = 'user';
    //             iconComponent = (
    //               <Feather name={iconName} size={25} color={color} />
    //             );
    //           }
    //           return iconComponent;
    //         },
    //       })}>
    //       <Tab.Screen
    //         name="MainPage"
    //         component={MainPage}
    //         options={{
    //           headerShown: false,
    //           tabBarLabel: 'Home',
    //           tabBarHideOnKeyboard: true,
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Attendence"
    //         component={AttendenceTab}
    //         options={{
    //           headerShown: false,
    //           tabBarLabel: 'Attendence',
    //           tabBarHideOnKeyboard: true,
    //         }}
    //       />
    //       <Tab.Screen
    //         name="Paymenttab"
    //         component={Paymenttab}
    //         options={{
    //           headerShown: false,
    //           tabBarLabel: 'Payment',
    //           tabBarHideOnKeyboard: true,
    //         }}
    //       />
    //       <Tab.Screen
    //         name="ProfileTab"
    //         component={ProfileTab}
    //         options={{
    //           headerShown: false,
    //           tabBarLabel: 'Profile',
    //           tabBarHideOnKeyboard: true,
    //         }}
    //       />
    //     </Tab.Navigator>
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
