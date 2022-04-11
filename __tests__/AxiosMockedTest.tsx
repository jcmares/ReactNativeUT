import { login, loginTest } from '../src/api/UserApi';
import { LoginDto } from '../src/interfaces/Response';
import { jest, expect, afterEach, describe } from '@jest/globals';
import mockAxios from '../__mocks__/axios';
import axios from 'axios';

jest.mock("axios")
const mockedA = jest.mocked(axios, true);

describe('', () => {

    it ('login successfully jest ', async () => {
        const data : LoginDto = { token : 'QpwL5tke4Pnpja7X4' };
        const body = {"email": "eve.holt@reqres.in", "password": "1234"}
    
        mockedA.post.mockResolvedValueOnce(data);
    
        //when
        const result =  await loginTest('eve.holt@reqres.in','1234');

        //then
        expect(mockedA.post).toHaveBeenCalledWith('/login', body);
        expect(result).toEqual(data);
    
    });
    
})



describe ('login endpoint  jest-mock-axios', () => {
    afterEach(() => {
        mockAxios.reset();
    })

  it ('logig successfully',  async()=>{

    const data : LoginDto = { token : 'QpwL5tke4Pnpja7X4' };
    const body = {"email": "eve.holt@reqres.in", "password": "1234"}
    
    mockAxios.post.mockResolvedValueOnce(data);

    //when
    const result = await loginTest('eve.holt@reqres.in','1234');

    //then 
    expect(mockAxios.post).toHaveBeenCalledWith('/login', body )
    expect(result).toEqual(data);

    //expect(mockedAxios.post).toHaveBeenCalledWith('https://reqres.in/api/login');
  });

})