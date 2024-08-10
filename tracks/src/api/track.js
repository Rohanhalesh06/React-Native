import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL:'https://9495-103-157-238-243.ngrok-free.app'
});

instance.interceptors.request.use(
    async function(config){
        const token = await AsyncStorage.getItem('token')
        if(token){
            config.headers.authorization = `Bearer ${token}`;
           // console.log("Token in api : ", config)

        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    } 
);

export default instance;