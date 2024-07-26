import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,FlatList,Button} from 'react-native';
import { Context } from '../BlogContext';
const indexScreen = function(){
    const {state,addBlogPosts} = useContext(Context)

    return(
    <View>

        <Text>indexScreen</Text>
        <Button
            onPress={addBlogPosts}
            title="Add Blog post"
        />

        <FlatList
        
            data={state}
            keyExtractor={(BlogPost)=> BlogPost.title}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>

            }}

        
        
        
        />


    </View>
    );
}

export default indexScreen;

