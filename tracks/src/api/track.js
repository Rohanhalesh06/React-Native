import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL:'http://43.204.108.98:3001/'
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