import Recat from "react";
import {View ,StyleSheet,Text,Button} from 'react-native';

const SignupScreen = ({navigation}) => {
    return(

        <View>
        <Text style={{fontSize:48}}>SignupScreen</Text>

        <Button
            title="Go to Search"
            onPress={()=>{navigation.navigate('Signin')}}
        />
        </View>
    )}
const styles = StyleSheet.create({});

export default SignupScreen;
 