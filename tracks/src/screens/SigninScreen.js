import Recat from "react";
import {view ,StyleSheet,Text,Button} from 'react-native';

const SigninScreen = () => {
    return(
        <>
            <Text style={{fontSize:48}}>SigninScreen</Text>
            <Button

            title="go to signup"
            onPress={()=>{
                navigator.navigate("Signup")
            }}
            
            
            />
        </>
    
    
)};

const styles = StyleSheet.create({});

export default SigninScreen;
 