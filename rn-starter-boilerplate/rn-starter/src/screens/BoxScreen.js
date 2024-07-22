import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const BoxScreen = function(){
    return(
        <View style={styles.ViewStyle}>
            <Text style={styles.TextOneStyle}>#child1</Text>
            <Text style={styles.TextTwoStyle}>#child2</Text>
            <Text style={styles.TextThreeStyle}>#child3</Text>
            <Text style={styles.TextFourStyle}>#child4</Text>

        </View>
    );
}

const styles=StyleSheet.create({
    ViewStyle:{
        borderWidth:5,
        borderColor:'Black',
       // flexDirection:'row',
        //alignItems:'flex-start',
        //alignItems:'center',
        //alignItems:'flex-end'
       // justifyContent:'space-between',
        //height:500,

    },

    TextOneStyle:{
        borderWidth:5,
        borderColor:'green',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
      // flex:4
    },

    TextTwoStyle:{
        borderWidth:5,
        borderColor:'green',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
    //    flex:4,
       //position:'absolute',
      //left:0,
      //right:0,
      //top:0,
      //bottom:0
      //...StyleSheet.absoluteFillObject

    },

    TextThreeStyle:{
        borderWidth:5,
        borderColor:'green',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
        //flex:4,
       //alignSelf:'center'
    },

    TextFourStyle:{
        borderWidth:5,
        borderColor:'green',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
        //flex:2
    },

});

export default BoxScreen;

