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
            //console.log(response.data.businesses)
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


        <View>
        <FlatList
            data={results.photos}
            keyExtractor={(photo) => photo }
            renderItem={({item}) => 
                <Image 
                    source={{item}}
                    style={styles.imageStyle}
                />
            }
        />

        </View>

};

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        width:100
    }
})




export default ShowResults;