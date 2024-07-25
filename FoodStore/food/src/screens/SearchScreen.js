import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet,ScrollView} from "react-native";
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
        <>
            <SearchBox

                string={string} 
                onstringchange={setstring}
                onSearchSubmit={()=> searchApi() }
            />

           <ScrollView>
                <ResultsList title='Cost Effective' results={filterByResults('$')}/>
                <ResultsList title='Bit Costlier' results={filterByResults('$$')}/>
                <ResultsList title='Big Spender' results={filterByResults('$$$')}/>
            </ScrollView> 

            {errorMessage ? <Text>{errorMessage}</Text> : null }

            
        </>
    );
}


const  styles = StyleSheet.create({

    viewStyle:{
        flex:1,
        marginLeft:5
    }
    
})

export default SearchScreen;