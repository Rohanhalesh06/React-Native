import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen"; 
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import  { Provider as AuthProvider } from './src/context/AuthContext' 
import { setNavigator } from "./src/navigationRef";
import ResolveOfScreen from "./src/screens/ResolveOfScreen";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const switchNavigator = createSwitchNavigator({
  
  resolveScreen: ResolveOfScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
},

)

const App = createAppContainer(switchNavigator);

export default () =>{
  return(
    <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=>{setNavigator(navigator)}}/>
      </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )};