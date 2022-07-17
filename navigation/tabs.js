import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg, {Path} from 'react-native-svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// const TabBarCustomButton = ( accessibilityState, children, onPress ) => {
// var isSelected = accessibilityState.selected

// if(isSelected){
//     return(
//         <View style={{ flex: 1, alignItems: "center" }}>
//         <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
//             <View style={{ flex: 1}}></View>
//             <Svg
//                 width={70}
//                 height={61}
//                 viewBox="0 0 75 61"
//             >
//                 <Path
//                     d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                    
//                 />
//             </Svg>
//             <View style={{ flex: 1 }}></View>
//         </View>

//         <TouchableOpacity
//             style={{
//                 top: -22.5,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 width: 50,
//                 height: 50,
//                 borderRadius: 25,
//                 backgroundColor: '#FFFFFF'
//             }}
//             onPress={onPress}
//         >
//             {children}
//         </TouchableOpacity>
//     </View>
//     )
// }
// else{
//     return(
//         <TouchableOpacity
//         style={{
//             flex: 1,
//             height: 60,
//             backgroundColor:  <TouchableOpacity
//                 style={{
//                     flex: 1,
//                     height: 60,
//                     backgroundColor: '#FFFFFF'
//                 }}
//                 activeOpacity={1}
//                 onPress={onPress}
//             >
//                 {children}
//             </TouchableOpacity>
//         }}
//         activeOpacity={1}
//         onPress={onPress}
//     >
//         {children}
//     </TouchableOpacity>
//     )
// }
// }





function DrawerRoutes() {
    return (
  
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" drawerType="slide" >
           <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Signup" component={Signup} />
        </Drawer.Navigator>

    );
  }


const Tabs = () =>{
    return(
        <Tab.Navigator 
        tabBarOptions={{
            showLabel: false,
            style:{
                borderTopWidth: 0,
                backgroundColor:"transparent",
                elevation:0,

            }
        }}
        
        barStyle={{backgroundColor: 'white'}}
        initialRouteName="Home"
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart' : 'cart-outline';
                }
                else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={25} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}

    >
        <Tab.Screen options={{headerShown:false}} name="Home"  component={DrawerRoutes}  />
        <Tab.Screen options={{headerShown:false}} name="Cart" component={Cart} />
        <Tab.Screen options={{headerShown:false}} name="Profile"  component={Profile} />
      
    </Tab.Navigator>
    )
}



export default Tabs;