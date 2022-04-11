import {LoginDto} from '../interfaces/Response';
import {AxiosInstance} from './Client';

export const login = (username: string, password: string) => {
  return AxiosInstance.post<LoginDto>('/login', {
    email: username,
    password: password,
  })
    .then(resp => {
      const {token} = resp.data;
      if (token !== undefined) {
        return token;
      }
    })
    .catch(err => {
      throw err;
    });
};

export const loginTest = async (username: string, password: string) => {
  return await  AxiosInstance.post<LoginDto>('/login', {
    email: username,
    password: password,
  });
    
}
