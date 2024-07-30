import React , { useContext } from "react";
import {Text,StyleSheet,View} from "react-native";
import BlogForm from "./components/blogForm";
import { Context } from "./context/BlogContext";

const EditScreen = function({navigation}){
    const {state,editBlog} = useContext(Context)
    const id = navigation.getParam('id')
    const BlogPost = state.find(function(BlogPost){ return BlogPost.id === id })

    return(
    
    <View>

        <BlogForm 
        
        initialValues={{title:BlogPost.title, content:BlogPost.content}}
        onSubmit={(title,content)=>{editBlog(id,title,content,function(){navigation.pop()})}}
        
        />

    </View>
    
);
}

const styles = StyleSheet.create({});

export default EditScreen;