import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet} from "react-native";
import SearchBox from "./components/SearchBox";
import useResults from "./components/hooks/useResults";
import ResultsList from "./components/resultsList";

const SearchScreen = function(){
    const [string,setstring] = useState('');
    const [searchApi,results,errorMessage] = useResults()

const filterByResults = function(price){
    return results.filter(result => {
        return result.price === price;
    })
}
    

    return(
        <View>
            <SearchBox 
                string={string} 
                onstringchange={setstring}
                onSearchSubmit={()=> searchApi() }
            />
            <Text>we got {results.length} results</Text>

            <ResultsList title='Cost Effective' results={filterByResults('$')}/>
            <ResultsList title='Bit Costlier' results={filterByResults('$$')}/>
            <ResultsList title='Big Spender' results={filterByResults('$$$')}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            
        </View>
    );
}


const  styles = StyleSheet.create({})

export default SearchScreen;