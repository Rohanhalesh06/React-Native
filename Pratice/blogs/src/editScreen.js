import React, {useState,useContext} from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";
import { Context } from "./context/BlogContext";
import BlogForm from "./components/blogForm";

const EditScreen = function({navigation}){

    return(
    
    <View>

        <BlogForm/>

    </View>
    
);
}

const styles = StyleSheet.create({});

export default EditScreen;