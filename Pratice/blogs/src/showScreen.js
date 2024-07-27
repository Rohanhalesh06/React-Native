import React,{useContext} from "react";
import {Text,View,StyleSheet} from "react-native";
import { Context } from "./context/BlogContext";

const showScreen = function({navigation}){
 //   console.log()

    const {state} = useContext(Context)


    //console.log(state)

    const reqBlog = state.find(
        function(reqBlog){
            return reqBlog.id === navigation.getParam('id')
        }
    )

    //console.log()


    return(
        <View>
            <Text>showScreen</Text>
            <Text>{reqBlog.title}</Text>
        </View>
    )};

const styles =  StyleSheet.create({});

export default showScreen;