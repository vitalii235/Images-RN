import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ImgNavigation } from './Navigation';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware  } from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


export default function App() {
  const store = createStore(rootReducer, 
      applyMiddleware(thunk)
    )
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ImgNavigation />
      </NavigationContainer>
    </Provider >
  );
}