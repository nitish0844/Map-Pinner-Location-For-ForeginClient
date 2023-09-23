import {createStore} from 'redux';
import RootReducer from './Reducer';
import {persistStore} from 'redux-persist';

export const store = createStore(RootReducer);

export const persistor = persistStore(store)
