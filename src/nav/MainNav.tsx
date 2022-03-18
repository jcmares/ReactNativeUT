import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Stack from './Stack';

const MainNav = () => {
  return (    
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;
