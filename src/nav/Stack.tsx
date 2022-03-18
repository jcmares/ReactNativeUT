import React from 'react';
import {View} from 'react-native';
import Home from '../screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login';

const Stack = () => {
  const Stack = createStackNavigator();
  return (
    <View style={{flex: 1, }}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </View>
  );
};

export default Stack;