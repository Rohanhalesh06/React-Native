import React,{useState,useContext} from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";





const BlogForm = function({onSubmit,initialValues={title:'',content:''}}){
    const [title,settitle] = useState(initialValues.title)
    const [content,setContent] = useState(initialValues.content)
  


return(
    <View>

        <Text style={styles.titleStyle} >Enter the Title: </Text>
        <TextInput
            style={styles.inputStyle}
            onChangeText={function(text){settitle(text)}}
            value={title}

        />


        <Text style={styles.titleStyle} >Enter the Content: </Text>
        <TextInput
            style={styles.inputStyle}
            onChangeText={function(value){setContent(value)}} 
            value={content}
        />


        <Button

            title="Save Blog"
            onPress={function(){onSubmit(title,content)}}

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


