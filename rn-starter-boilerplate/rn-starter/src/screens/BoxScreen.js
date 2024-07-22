import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const BoxScreen = function(){
    return(
        <View style={styles.ParentStyle}>
            <View style={styles.ViewOneStyle}/>
            <View style={styles.ViewTwoStyle}/>
            <View style={styles.ViewThreeStyle}/>
        </View>
    );
}

const styles=StyleSheet.create({

    ParentStyle:{
        borderWidth:5,
        borderColor:'Black',
        height:200,
        flexDirection:'row',
        justifyContent:'space-between'
       // flexDirection:'row',
        //alignItems:'flex-start',
        //alignItems:'center',
        //alignItems:'flex-end'
       // justifyContent:'space-between',
        //height:777,
        //backgroundColor:"red"

    },

    ViewOneStyle:{
        //borderWidth:5,
        //borderColor:'Black',
       // flexDirection:'row',
        //alignItems:'flex-start',
        //alignItems:'center',
        //alignItems:'flex-end'
       // justifyContent:'space-between',
        height:50,
        width:50,
        backgroundColor:"red"


    },


    ViewTwoStyle:{
        //borderWidth:5,
       // borderColor:'Black',
       // flexDirection:'row',
        //alignItems:'flex-start',
        //alignItems:'center',
        //alignItems:'flex-end'
       // justifyContent:'space-between',
       height:50,
       width:50,
       backgroundColor:"green",
       alignSelf:'flex-end',
       bottom:50


    },


    ViewThreeStyle:{
        //borderWidth:5,
        //borderColor:'Black',
       // flexDirection:'row',
        //alignItems:'flex-start',
        //alignItems:'center',
        //alignItems:'flex-end'
       // justifyContent:'space-between',
       height:50,
       width:50,
       backgroundColor:"purple"

    },


    TextOneStyle:{
        borderWidth:5,
        borderColor:'black',
        textAlign:'center',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
      // flex:4
    },

    TextTwoStyle:{
        borderWidth:5,
        borderColor:'red',
        alignSelf:'flex-start',
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
        borderColor:'purple',
      //  margin:20,
       // marginHorizontal:20,
        //marginVertical:20,
        //flex:4,
       alignSelf:'flex-end',
       top:30,
       position:'absolute'
    },


});

export default BoxScreen;

