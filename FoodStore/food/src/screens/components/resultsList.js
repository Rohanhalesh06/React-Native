import React from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from './resultDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = function({title,results,navigation}){
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

                    <TouchableOpacity onPress={() => navigation.navigate('ShowResults',{id:item.id})}>
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

