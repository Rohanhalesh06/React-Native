import React from "react";
import {Text,View,StyleSheet} from "react-native";
import BlogForm from "./components/blogForm";

const createScreen = function({navigation}){


    return(
        <View>
            <BlogForm/>
        </View>
    );

}


const styles = StyleSheet.create({});


export default createScreen;
