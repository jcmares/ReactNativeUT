import React, { JSXElementConstructor } from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../src/screens/login';
import MockedNavigator from '../src/nav/MockedNavigator';
import {act} from 'react-test-renderer';
import { describe, expect, it, jest} from '@jest/globals';
import responseJson from '../src/mock/loginSuccess.json';
import axios from 'axios'
import { LoginDto } from '../src/interfaces/Response';


it(' to pass test ', ()=> {} )
it('renders', () => {
  const {getAllByText, getAllByPlaceholderText} = render(
    <MockedNavigator component={Login} />,
  );

  expect(getAllByText('Login').length).toBe(2);
  expect(getAllByPlaceholderText('username').length).toBe(1);
  expect(getAllByPlaceholderText('password').length).toBe(1);
});

it('show invalid credentials messages', async () => {
  const {getByTestId, getByText, queryAllByText} = render(
    <MockedNavigator component={Login} />,
  );

  await act(() => {
    fireEvent.press(getByTestId('loginButton'));
  });

  await expect(queryAllByText('invalid username').length).toBe(1);
  await expect(queryAllByText('invalid password').length).toBe(1);
});


jest.mock("axios")
const mockedA = jest.mocked(axios, true);

describe('Login', () => {

  it('login success', async () => {
    const {getByTestId, queryAllByText, getByText} = render(
      <MockedNavigator component={Login} />,
    );
    //const data : LoginDto = { token : 'QpwL5tke4Pnpja7X4' };
    const body = {"email": "eve.holt@reqres.in", "password": "1234"}

    fireEvent.changeText(getByTestId('usernameInput'), 'eve.holt@reqres.in');
    fireEvent.changeText(getByTestId('passwordInput'), '1234');
    
    //make POST method resolves {data}
    mockedA.post.mockResolvedValueOnce(responseJson);

    await act(() => {      
      //when
      fireEvent.press(getByTestId('loginButton'));
      
    });

    //then
    expect(mockedA.post).toHaveBeenCalledWith('/login', body);
    //expect(result).toEqual(data);
    await expect(queryAllByText('invalid username').length).toEqual(0);
    await expect(queryAllByText('invalid password').length).toEqual(0);
  });
});