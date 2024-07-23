import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet} from "react-native";
import SearchBox from "./components/SearchBox";
import useResults from "./components/hooks/useResults";
import ResultsList from "./components/resultsList";

const SearchScreen = function(){
    const [string,setstring] = useState('');
    const [searchApi,results,errorMessage] = useResults()
    

    return(
        <View>
            <SearchBox 
                string={string} 
                onstringchange={setstring}
                onSearchSubmit={()=> searchApi() }
            />
            <Text>Search Screen</Text>
            <Text>we got {results.length} results</Text>
            <ResultsList/>
            <ResultsList/>

            <ResultsList/>

            <ResultsList/>

            {errorMessage ? <Text>{errorMessage}</Text> : null }
        </View>
    );
}


const  styles = StyleSheet.create({})

export default SearchScreen;