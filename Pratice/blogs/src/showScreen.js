import React,{useContext} from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import { Context } from "./context/BlogContext";
import {EvilIcons} from '@expo/vector-icons'

const showScreen = function({navigation}){
 //   console.log()

    const {state} = useContext(Context)


    //console.log(state)

    const reqBlog = state.find(
        function(reqBlog){
            return reqBlog.id === navigation.getParam('id')
        }
    )

    //console.log()


    return(
        <View>

            <Text style={styles.contentStyle}>{reqBlog.content}</Text>
        </View>
    )};

const styles =  StyleSheet.create({

    contentStyle:{

      
        fontSize:45,
        
    },

});

showScreen.navigationOptions = function({navigation}){
    
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('edit',{id:navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30} />
        
          </TouchableOpacity>
        ),
      };
}

export default showScreen;