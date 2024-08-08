import React,{useContext} from 'react';
import {View ,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from './components/spacer';
import { Context } from '../context/AuthContext';
const AccountScreen = () => {
    const {signout } = useContext(Context);
    return(
    <View>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Button
            title="signout"
            onPress={signout}
        />
    </View>
    )
}

const styles = StyleSheet.create({});

export default AccountScreen;
 