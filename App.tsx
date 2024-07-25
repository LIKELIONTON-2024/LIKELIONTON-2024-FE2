import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/Router';

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
