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
import { FontAwesome } from '@expo/vector-icons';
import Spacer from './components/spacer';
 

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
        <Spacer/>
        <Spacer/>
        <Map/>
        
        {err 
            ? <Text>{err}</Text>
            :  null
        }
        
        <TrackForm/>

        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title : 'Add Track',
    tabBarIcon: <FontAwesome name = "plus" size={20}/>
};



export default withNavigationFocus(TrackCreateScreen);
 