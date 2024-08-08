import {useEffect,useState} from 'react';
import { 
        Accuracy, 
        requestForegroundPermissionsAsync, 
        watchPositionAsync 
        } from 'expo-location';

export default function(shouldTrack,callback){
    const [err,setErr] = useState(null);
    const [subscriber,setSubscriber] = useState(null);
    const starWatching = async function(){
        try{
            const {granted} = await requestForegroundPermissionsAsync();
            if(!granted){
                throw new Error('Location permission not granted ');
            }

            await requestForegroundPermissionsAsync();
           const subscriber = await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1,
                distanceInterval:1
            },
            callback
        )
        setSubscriber(subscriber)

        }
        catch(e){
            setErr(e)
        }

    }

    useEffect(()=>{
        if(shouldTrack){
            console.log("tracking started")
            starWatching()
        }

        else{
            console.log("Tracking stoped ");
            subscriber.remove();
            setSubscriber(null)

        }
    },[shouldTrack])
    return [err];
}