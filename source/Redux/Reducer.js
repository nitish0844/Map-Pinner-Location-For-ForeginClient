import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';

import {UserReducer} from './Reducers/UserReducer';
import {ThemeReducer} from './Reducers/ThemeReducer';
import {ToastReducer} from './Reducers/ToastReducer';
import {ChatReducer} from './Reducers/ChatReducer';

const storage = new MMKV();

export const reduxStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const themeConfig = {
  key: 'theme',
  storage: reduxStorage,
};

const chatConfig = {
  key: 'notes',
  storage: reduxStorage,
};

export default combineReducers({
  UserReducer: persistReducer(persistConfig, UserReducer),
  ThemeReducer: persistReducer(themeConfig, ThemeReducer),
  ChatReducer: persistReducer(chatConfig, ChatReducer),
  ToastReducer: ToastReducer,
});
