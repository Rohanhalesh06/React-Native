import React from "react";
import { Text, StyleSheet,Button,View} from "react-native";
import BoxScreen from "./BoxScreen";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button

      title='Go to boxScreen Demo'
      onPress={()=>{
        navigation.navigate('Box')


      }}
      
      
      />
    </View>
)};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
