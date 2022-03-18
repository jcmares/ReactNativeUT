import axios  from "axios";

export const LoginApi = axios.create({
    baseURL: 'https://reqres.in/api'
})  