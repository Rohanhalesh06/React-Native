import {React,useEffect,useState } from "react";
import {View,StyleSheet,Text,FlatList,Image} from "react-native"

import yelp from "../api/yelp";

const getRandomElements = (array, numElements) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
};

const ShowResults = ({navigation}) => {
    const id = navigation.getParam('id')
    const imagesArray = navigation.getParam('images')
    const randomImages = getRandomElements(imagesArray, 4);
    console.log(randomImages)
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')
    const searchApi = async (id) => {
        console.log("sub api call")

    
        try{
    
            const response = await yelp.get(`/${id}`);
          //  console.log(response.data)
            setResults(response.data)

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
 
        //console.log(results)
    
    
    
        return(
        <View style={styles.ViewStyle}>
            <Text style={styles.titleStyle}>{results.name}</Text>

        <FlatList
            data={randomImages}
            keyExtractor={photo => photo }
            renderItem={({item}) => {
                return <Image style={styles.imageStyle} source={{uri:item}} />

            }}
        />

        </View>
    )
};

const styles = StyleSheet.create({

    imageStyle:{
        height:200,
        width:300,
        marginBottom:15,
        marginLeft:15
       // alignSelf:'center'
    },

    titleStyle:{
        marginBottom:15,
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center'
    },

    ViewStyle:{
        flex:1,
        
    }


})




export default ShowResults;