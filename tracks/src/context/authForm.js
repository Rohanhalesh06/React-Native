import React,{useState,useContext} from "react";
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import {Button,Text,Input} from "react-native-elements";
import Spacer from "../screens/components/spacer"
import { Context as AuthContext } from "../context/AuthContext";
const AuthForm = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {state,signup} = useContext(AuthContext)
    console.log(state);

    return(
            <View style={styles.container}>
                <Spacer>
                    <Text h3>Sign Up for Tracker </Text>
                </Spacer>

                <Input
                    label='Email'
                    value={email}
                    onChangeText={function(email){setEmail(email)}}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>

                <Input
                    secureTextEntry
                    label='Password'
                    value={password}
                    onChangeText={function(pass){setPassword(pass)}}
                    autoCapitalize="none"
                    autoCorrect={false}
    
                />

                <Spacer>
                    <Button
                        title="Sign Up"
                        onPress={function(){signup({email,password})}}  
                    />
                </Spacer>
                {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                <Spacer/>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.link}>Already have an account? Sign in instead</Text>
                    
                </TouchableOpacity>


            </View>
    )};

    AuthForm.navigationOptions = () => {
        return {
          headerShown: false,
        };
      };

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       marginBottom:250,

    },
    errorMessage:{
        fontSize:20,
        color:'red',
        marginLeft:10

    },

    link:{
        color:'blue',
        marginLeft:10
    },

});

export default AuthForm;
 