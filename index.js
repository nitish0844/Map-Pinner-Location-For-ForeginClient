import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './source/Redux/Store';

LogBox.ignoreAllLogs();

LogBox.ignoreLogs([
  'RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks',
]);

const HeadlessCheck = ({isHeadless}) => {
  if (isHeadless) {
    return null;
  }

  return <Main />;
};

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
