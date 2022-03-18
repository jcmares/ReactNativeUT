import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import {LoginApi} from '../../api/LoginApi';
import {LoginResp} from '../../interfaces/LoginResponse';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const login = () => {
    if (username.length === 0 || username === null) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (password.length === 0 || password === null) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (usernameError || passwordError) {
      return;
    }

    LoginApi.post<LoginResp>('/login', {
      email: username,
      password: password,
    })
      .then(resp => {
        const {token} = resp.data;
        if ( token !== undefined ){
          navigation.navigate('Home');
        }
        
      })
      .catch(err => {
        console.error(err);
        setPasswordError(true);
        setUsernameError(true);
      });
  };

  return (
    <View style={{ flex:1, backgroundColor: '#FFFFFF' , padding: 20}}>
      <Text style={{fontSize: 45}}>React Native - UT</Text>
      
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text style={styles.t1}>Login</Text>

          <View style={{paddingVertical: 5}}>
            <View style={styles.input}>
              <TextInput
                testID="usernameInput"
                value={username}
                placeholder="username"
                onChangeText={value => {
                  setUsername(value);
                }}
              />
            </View>
          </View>
          <View style={{paddingVertical: 5}}>
            <View style={styles.input}>
              <TextInput
                testID="passwordInput"
                value={password}
                placeholder="password"
                secureTextEntry={true}
                onChangeText={value => {
                  setPassword(value);
                }}
              />
            </View>
          </View>
          <View>
            {usernameError && (
              <Text style={styles.error}> invalid username</Text>
            )}
            {passwordError && (
              <Text style={styles.error}> invalid password</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              testID="loginButton"
              onPress={() => {
                login();
              }}>
              <View style={styles.button}>
                <Text style={styles.t2}>Login</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      
    </View>
  );
};

export default Login;
