import React, { Children } from "react";
import {View,StyleSheet} from "react-native";

const Spacer = ({children})=>{

    return(
    <View style={styles.SpaceStyle}>{children}</View> 
    )};

const styles = StyleSheet.create({
    SpaceStyle:{
        margin:10
    }
});


export default Spacer;