import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import MainNav from './src/nav/MainNav';
import {Provider} from 'react-redux';
import store from './src/redux/store/AppStore';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <MainNav />
      </View>
    </Provider>
  );
};

export default App;
