import React from "react";
import {StyleSheet,Text,Button} from 'react-native';
import {View} from "react-native-elements"

const SignupScreen = ({navigation}) => {
    return(

        <>
        <Text style={{fontSize:48}}>SignupScreen</Text>

        <Button
            title="Go to Signin"
            onPress={()=>{navigation.navigate('Signin')}}   
        />

        <Button
            title="Go to main flow"
            onPress={()=>{navigation.navigate('mainFlow')}}   
        />

       
        </>
    )}
const styles = StyleSheet.create({});

export default SignupScreen;
 