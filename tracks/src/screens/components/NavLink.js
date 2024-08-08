import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './spacer';

const NavLink = function({navigation,routeName,text}){
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
            </TouchableOpacity>
        </View>
    )};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
      },
})


export default withNavigation(NavLink);