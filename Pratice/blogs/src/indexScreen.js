import React,{useContext,useEffect} from 'react'
import {View,StyleSheet,Text,Button,FlatList,TouchableOpacity} from 'react-native'
import { Context } from './context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = function({navigation}){
const {state,addBlog,delBlog,getBlogs} = useContext(Context)
useEffect(function(){getBlogs()},[])


    return(
        <View>

        <FlatList
            data={state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>(


                <TouchableOpacity

                    onPress={function(){
                        navigation.navigate('showscreen',{id:item.id})

                    }}
                
                
                
                >
                <View style={styles.row}>

                    <Text style={styles.titleStyle}>{item.title} - { item.id } </Text>


                    <TouchableOpacity
                    
                        onPress={()=>{
                            delBlog(item.id)

                        }}

                    >

                    <Feather
                        name='trash'
                        style={styles.iconStyle}
                    />
                    </TouchableOpacity>

                </View>
                </TouchableOpacity>
            )}

        />

        </View>
    );
}


IndexScreen.navigationOptions = function({navigation}){
    
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('createscreen')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
}







const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'black',
        paddingHorizontal:10

    },
    
    titleStyle:{
        fontSize:20
    },

    iconStyle:{
        fontSize:20

    }










})


export default IndexScreen