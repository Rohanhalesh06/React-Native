import React, { Children } from "react";
import {View,StyleSheet} from "react-native";

const Spacer = function(){

    return(
    <View>style={styles.SpaceStyle}{Children}</View> 
    )};

const styles = StyleSheet.create({
    SpaceStyle:{
        margin:10
    }
});


export default Spacer;