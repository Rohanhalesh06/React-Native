import {React,useEffect,useState } from "react";
import {View,StyleSheet,Text,FlatList,Image} from "react-native"

import yelp from "../api/yelp";

const ShowResults = ({navigation}) => {
    const id = navigation.getParam('id')
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')
    const searchApi = async (id) => {
        console.log("sub api call")

    
        try{
    
            const response = await yelp.get(`/${id}`);
            console.log(response.data)
            setResults(response.data)
            setErrorMessage('')
        }
        catch(err){
            setErrorMessage('Something went Wrong ');
    
        }}
    
    
        useEffect(() => {
            searchApi(id)
            //console.log()
        },[]);


        if(!results){
            return null;
        }
      // console.log(results.name)

    return(
        <View>
            <Text>{results.name}</Text>

        <FlatList
            data={results}
            keyExtractor={photo => photo }
            renderItem={({item}) => {
                return <Image style={styles.imageStyle} source={{item}} />

            }}
        />

        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        width:100
    }
})




export default ShowResults;