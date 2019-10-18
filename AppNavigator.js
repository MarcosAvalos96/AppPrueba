
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
const AppNavigator = createStackNavigator(
    {
   
    Login:LoginScreen,
    Home:HomeScreen
    
  },
  {
    initialRouteName: "Login"
  },);
  
  export default createAppContainer(AppNavigator)
  
  