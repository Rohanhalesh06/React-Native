import React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from './resultDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = function({title,results,navigation}){
    if(!results.length){
        return null
    }

    const imagesArray = results.map(result => result.image_url); // Adjust 'image' based on your actual data structure
    //console.log(imagesArray)


    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {

                    return(

                    <TouchableOpacity onPress={() => navigation.navigate('ShowResults',{images:imagesArray,id:item.id})}>
                        <ResultDetails result={item}/>
                    </TouchableOpacity>
                );
                }}          

            />
        </View>
    );
}

const styles = StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5

    },
});






export default withNavigation(ResultsList);

