import React , {useContext} from "react";
import {Text,View,StyleSheet} from "react-native";
import BlogForm from "./components/blogForm";
import { Context } from "./context/BlogContext";



const createScreen = function({navigation}){
    const { addBlog } = useContext(Context);



    return(
        <View>
            <BlogForm onSubmit={(title,content)=>{addBlog(title,content,function(){navigation.navigate('Index')})}}/>
        </View>
    );

}


const styles = StyleSheet.create({});


export default createScreen;
