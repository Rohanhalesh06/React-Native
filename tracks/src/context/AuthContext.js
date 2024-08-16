import createdataContext from "./createdataContext";
import trackerApi from "../api/track";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";
const authReducer = function(state,action){
    switch(action.type){

        case 'addErr' :
            return {...state,errorMessage:action.payload};

        case 'signin':
            //console.log("signin invoked ")
            return {errorMessage:'',token:action.payload};

        case 'signout':
           // console.log("signout function called");
            return ({token:null,errorMessage:''});




        case 'clearErrorMessage':
            return {...state,errorMessage:''}

        default:
            return state;
    }
};

const tryLocalSignin =  function(dispatch){
    return async function(){
        const token = await AsyncStorage.getItem('token');
        if(token){
            //console.log("stored token ",token)

            dispatch({type:'signin',payload:token});
            navigate('TrackList')

        }
        else
        {
            navigate('Signup');
        }
    }
}



const signup = function(dispatch){
    return async function({email,password}){


        try{

            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
          console.log(response.data);
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList')
            
        }
        
        catch(err){
           console.log(err)
            dispatch({type:'addErr',payload:'Something went Wrong '})

        }

    };
};


const clearErrorMessage = function(dispatch){
    return function(){
        dispatch({type:'clearErrorMessage'})
    }
}


const signin = function(dispatch){

    return async function({email,password}){
        try
        {   
            const response = await trackerApi.post('/signin',{email,password});
           console.log(response.data.token)
            await AsyncStorage.setItem('token',response.data.token);
            const token = await AsyncStorage.getItem('token');
            console.log("Stored token : ",token)
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList')
        }
        catch(err)
        {

         console.log(err)

            dispatch({
                type:'addErr',
                payload:'Something went Wrong '
            })

        }   
    };
};


const signout =  function(dispatch){
    return async function(){
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('loginFlow')

        

    };
;}



export const {Provider,Context} = createdataContext(
    authReducer,
    {signin,signout,signup,clearErrorMessage,tryLocalSignin},
    {token:null,errorMessage:''}
);

