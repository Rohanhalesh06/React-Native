import Recat from "react";
import {view ,StyleSheet,Text} from 'react-native';

const TrackListScreen = () => {
return(

        <>
        <Text style={{fontSize:48}}>SignupScreen</Text>

        <Button
            title="Go to Track Detail"
            onPress={()=>{navigation.navigate('TrackDetail')}}   
        />
        </>
)}

const styles = StyleSheet.create({});

export default TrackListScreen;
 