import React,{useState} from "react";
import {View,Text,Button,StyleSheet} from "react-native";
import SearchBox from "./components/SearchBox";
import yelp from './api/yelp';

const SearchScreen = function(){
    const [string,setstring] = useState('')
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')
    const searchApi = async() => {


    try{

        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term:string,
                location:'san jose'
            },
        });
        //console.log(response.data.businesses)
        setResults(response.data.businesses)
        setErrorMessage('')
    }
    catch(err){
        setErrorMessage('Something went Wrong ');

    }}

    return(
        <View>
            <SearchBox 
                string={string} 
                onstringchange={setstring}
                onSearchSubmit={()=> searchApi() }
            />
            <Text>Search Screen</Text>
            <Text>we got {results.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
        </View>
    );
}


const  styles = StyleSheet.create({})




export default SearchScreen;