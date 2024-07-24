import React from 'react';
import {Text,View,StyleSheet,FlatList,Image} from "react-native";

const ResultDetails = function({result}){
    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={{uri:result.image_url}}
            />

            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text style={styles.nameStyle}>{result.rating} Stars {result.review_count} Reviews </Text>
        </View>
    );

}

export default ResultDetails;

const styles = StyleSheet.create({

    imageStyle:{
        height:120,
        width:200,
        borderRadius:4,
        marginBottom:5

    },


    titleStyle:{
        fontWeight:'bold',
        
        
    },
    

    container:{
        marginLeft:15

    },

    nameStyle:{
        marginBottom:5
    }
    

})
