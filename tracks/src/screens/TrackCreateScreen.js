import {StyleSheet} from 'react-native';
import { useState,useEffect,useContext,useCallback } from 'react';
import {Text} from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from "react-navigation";
import Map from './components/map';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
//import '../screens/components/_mockLocation'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../context/TrackForm';



const TrackCreateScreen = ({isFocused}) => {
    const {state:{recording},addLocation} = useContext(LocationContext)
    
    /*const [err] = useLocation(isFocused,
    function(location){
            addLocation(location,state.recording)
    });*/

    const callback = useCallback(
        function(location){
                addLocation(location,recording);
        },[recording]
    )

    const [err] = useLocation(isFocused || recording ,callback);



    return(
        <SafeAreaView forceInset={{top:'always'}}>
        <Text h2>Create Track</Text>
        <Map/>
        
        {err 
            ? <Text>{err}</Text>
            :  null
        }
        
        <TrackForm/>

        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);
 