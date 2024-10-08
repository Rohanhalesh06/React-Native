import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../context/authForm';
import NavLink from './components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
  


  return (

    <View style={styles.container}>

    <NavigationEvents
      onWillFocus={clearErrorMessage}
      />
      
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

    <NavLink
        routeName="Signin"
        text="Already have an account ? Sign in"

    />

    </View>
  );
};


SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
    //position:'absolute'
  },
 
});

export default SignupScreen;