import React, { useEffect } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainNav from './src/nav/MainNav';

const App = () => {

  return (
        <View style={{flex: 1}}>
          <MainNav />
        </View>
  );
};

export default App;
