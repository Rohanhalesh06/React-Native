import React,{useState,useContext} from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";
import { Context } from "../context/BlogContext";


const BlogForm = function({navigation}){
    const [title,settitle] = useState('')
    const [content,setContent] = useState('');
    const {addBlog} = useContext(Context);
  


return(
    <View>

        <Text style={styles.titleStyle} >Enter the Title: </Text>
        <TextInput
            style={styles.inputStyle}
            onChangeText={function(text){settitle(text)}}
        />


        <Text style={styles.titleStyle} >Enter the Content: </Text>
        <TextInput
            style={styles.inputStyle}
            onChangeText={function(value){setContent(value)}} 
        />


        <Button

            title="Save Blog"
            onPress={function(){addBlog(title,content)}}

        />

    </View>



)};





const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'

    },

    inputStyle:{

        margin:10,
        borderColor:'black',
        borderWidth:1,
        marginBottom:15,
        fontSize:18,



    

    }




});





export default BlogForm;


