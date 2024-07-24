import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import ResultDetails from './resultDetails';

const ResultsList = function({title,results}){
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return <ResultDetails result={item}/>
                }}          

            />
        </View>'''
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






export default ResultsList;

