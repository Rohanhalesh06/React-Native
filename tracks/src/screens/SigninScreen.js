import React from "react";
import {View ,StyleSheet,Text,Button} from 'react-native';

const SigninScreen = ({navigation}) => {
    return(
        <>
            <Text style={{fontSize:48}}>SigninScreen</Text>
            <Button

            title="go to signup"
            onPress={()=>{
                navigation.navigate("Signup")
            }}
            />
        </>
    
    
)};

const styles = StyleSheet.create({});

export default SigninScreen;
 