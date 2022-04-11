import axios  from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'https://reqres.in/api'
})  