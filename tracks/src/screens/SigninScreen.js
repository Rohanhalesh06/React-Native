import React,{useContext} from "react";
import {View ,StyleSheet} from 'react-native';
import NavLink from "./components/NavLink";
import AuthForm from "../context/authForm";
import { Context } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({navigation}) => {
    const { state,signin,clearErrorMessage } = useContext(Context) 
    return(
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}

            />

            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage} 
                onSubmit={signin}
                submitButtonText="Sign In"
            />

            <NavLink
                routeName="Signup"
                text="Don't have an account ? Sign Up"
            />

        </View>
    
    )};


SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 100,
    },
});

export default SigninScreen;
 