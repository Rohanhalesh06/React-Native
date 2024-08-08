import {StyleSheet} from 'react-native';
import { useState,useEffect,useContext } from 'react';
import {Text} from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from "react-navigation";
import Map from './components/map';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
//import '../screens/components/_mockLocation'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import TrackForm from '../context/TrackForm';



const TrackCreateScreen = ({isFocused}) => {
    const {state,addLocation} = useContext(LocationContext)
    const [err] = useLocation(isFocused,
        function(location){
            addLocation(location,state.recording)
    });

    return(
        <SafeAreaView forceInset={{top:'always'}}>
        <Text h2>Create Track</Text>
        <Map/>
        
        {state.err 
            ? <Text>{state.err}</Text>
            :  null
        }
        
        <TrackForm/>
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);
 