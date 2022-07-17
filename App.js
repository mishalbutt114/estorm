import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import Cart from './screens/Cart';
import Profile from "./screens/Profile";
import Tabs from "./navigation/tabs";
import DetailsScreen from "./Components/DetailsScreen";
import Signup from "./screens/Auth/Signup";
import Login from "./screens/Auth/Login";

const Stack = createStackNavigator();

const App = () => {
  return(
<NavigationContainer>
  <Stack.Navigator
    options={{headerShown:false}}
    initialRouteName={"Home"}>

    <Stack.Screen options={{headerShown:false}} name="Home" component={ Tabs }  />
    <Stack.Screen options={{headerShown:false}}   name="DetailsScreen" component={ DetailsScreen }  />
      <Stack.Screen name="Cart" component={ Cart }  />
      <Stack.Screen  name="Profile" component={ Profile }  />
      <Stack.Screen name="Signup" component={ Signup }  />
      <Stack.Screen  name="Login" component={ Login }  />
      

  </Stack.Navigator>
</NavigationContainer>
  )
  }


export default App;