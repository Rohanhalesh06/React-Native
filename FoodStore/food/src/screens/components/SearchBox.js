import { Feather } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchBox = function({string,onstringchange,onSearchSubmit}){
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle}
                placeholder="Search"
                value={string}
                onChangeText={onstringchange}
                autoCapitalize='None'
                autoCorrect={false}
                onEndEditing={onSearchSubmit}
               
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:10,
        marginHorizontal:15,
        flexDirection:'row'
        
    },
    
    inputStyle:{
        //backgroundColor:'red',z
        flex:1,
        fontSize:18
        //borderColor:'black',
        //borderWidth:1

    },

    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }


});

export default SearchBox;