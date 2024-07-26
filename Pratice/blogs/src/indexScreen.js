import React,{useContext} from 'react'
import {View,Style,Text,Button,FlatList} from 'react-native'
import Context from './context/BlogContext'

const IndexScreen =function(){
const {data,addBlog} = useContext(Context)
console.log(addBlog)
console.log(data)
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
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})=>(
                <View>

                    <Text>{item.title}</Text>

                </View>
            )}

        />

        </View>
    );
}


export default IndexScreen