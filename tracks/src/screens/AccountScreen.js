import React,{useContext} from 'react';
import {View ,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'
import Spacer from './components/spacer';
import { Context } from '../context/AuthContext';
const AccountScreen = () => {
    const {signout } = useContext(Context);
    return(
    <View style={styles.container}>
        <Spacer style={styles.spacer}/>
        <Text style={{fontSize:30}}>AccountScreen</Text>
        <Spacer/>
        <View style={styles.spacer}/>
        <View style={styles.buttonStyle}>
        <Button
            title="signout"
            onPress={signout}
            style={styles.buttonStyle}
        />
        </View>
    </View>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon : <FontAwesome name='gear' size={20}/>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacer: {
        flex: 1,
    },
    buttonStyle: {
        marginBottom: 30, 
    },
});
export default AccountScreen;
 