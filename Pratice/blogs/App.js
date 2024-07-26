import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/indexScreen';
import { Provider } from './src/context/BlogContext';
const navigation = createStackNavigator(
  {Index : IndexScreen},
  
  {
    initialRouteName:"Index",
    defaultNavigationOptions:{
      title:'Blog App'
    }
  }
);

const App = createAppContainer(navigation);

export default function(){
  return <Provider><App/></Provider>
}