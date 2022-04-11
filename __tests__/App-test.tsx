
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
//import {render} from '@testing-library/react-native'

it('renders correctly', () => {
  
    renderer.create(<App />);
});


