import React,{useContext} from 'react'
import {View,StyleSheet,Text,Button,FlatList,TouchableOpacity} from 'react-native'
import { Context } from './context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen =function(){
const {state,addBlog} = useContext(Context)
//console.log()
//console.log()

    return(
        <View>
            <Text>IndexScreen</Text>


            <Button
                title='Add Blog'
                onPress={()=>{
                    addBlog()
                    
                }}
            />
        <FlatList
            data={state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>(
                <View style={styles.row}>

                    <Text style={styles.titleStyle}>{item.title} - { item.id } </Text>


                    <TouchableOpacity
                    
                        onPress={()=>{
                            console.log(`${item.id} deleted`)

                        }}
                    
                    
                    
                    
                    
                    >

                    <Feather
                        name='trash'
                        style={styles.iconStyle}
                    />
                    </TouchableOpacity>

                </View>
            )}

        />

        </View>
    );
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