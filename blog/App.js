import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from './src/Context/indexScreen.js'
import { Provider } from './src/Context/BlogContext';
const navigator = createStackNavigator({
    Index: indexScreen,
},

{
    initialRouteName:'Index',
    defaultNavigationOptions:{
        title:'Blogs'
    }

});

const App = createAppContainer(navigator);

export default ()=>{
    return <Provider><App/></Provider>
}