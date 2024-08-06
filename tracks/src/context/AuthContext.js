import createdataContext from "./createdataContext";
import trackerApi from "../api/track";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";
const authReducer = function(state,action){
    switch(action.type){

        case 'addErr' :
            return {...state,errorMessage:action.payload};

        case 'signup':
            return {errorMessage:'',token:action.payload}

        default:
            return state;
    }
};

const signup = function(dispatch){
    return async function({email,password}){


        try{

            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            //console.log(response.data);
            dispatch({type:'signup',payload:response.data.token});
            navigate('TrackList')
            
        }
        
        catch(err){
            dispatch({type:'addErr',payload:'Something went Wrong '})
        }

    };
};


const signin = function(dispatch){
    return function({email,password}){

    };
};


const signout =  function(dispatch){
    return function({email,password}){

    };
;}



export const {Provider,Context} = createdataContext(
    authReducer,
    {signin,signout,signup},
    {token:null,errorMessage:''}
);

