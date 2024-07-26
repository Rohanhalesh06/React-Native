import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,FlatList,Button} from 'react-native';
import BlogContext from './BlogContext';

const indexScreen = function(){
    const {data,updateBlogPost} = useContext(BlogContext)
        //console.log(value)
    
    //console.log(value)

    return(
    <View>

        <Text>indexScreen</Text>
        <Button
            onPress={updateBlogPost}
            title="Add Blog post"
        />

        <FlatList
        
            data={data}
            keyExtractor={(BlogPost)=> BlogPost.title}
            renderItem={({item})=>{
                return <Text>{item.title}</Text>

            }}

        
        
        
        />


    </View>
    );
}

export default indexScreen;

