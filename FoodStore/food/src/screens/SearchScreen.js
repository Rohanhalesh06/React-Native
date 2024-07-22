import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from "react-native";
import SearchBox from "./components/SearchBox";

const SearchScreen = function(){
    const [string,setstring] = useState('')
    return(
        <View>
            <SearchBox string={string} onstringchange={newString => setstring(newString)}/>
            <Text>Search Screen</Text>
            <Text>{string}</Text>
        </View>
    );
}


const  styles = StyleSheet.create({})




export default SearchScreen;