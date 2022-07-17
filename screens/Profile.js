import React from "react";
import {View, Text , SafeAreaView,  Touchable, Image} from 'react-native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileEdited = () => {
alert('Profile Edited Successfully');
}

const Profile = ({navigation}) =>{
    return(


        <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
            <View style={styles.header}>
            <Ionicons name='close' size={25}  onPress={() => navigation.goBack()}/>
           <Text style={{fontSize:16 , fontWeight:'bold'}}>Edit Profile</Text>
           <Ionicons name="checkmark" size={28}  onPress={() => {
            ProfileEdited();
            navigation.goBack();
            }}/>
                </View>
                <View style={{padding:20, alignItems: 'center'}}>
                    <Image
                    style={{width:80, height:80, borderRadius:100}}
                    source={require('../assets/Profile.png')}></Image>
                    <Text style={{color:'#68A1F6'}}>Change Profile Photo</Text>
                </View>

                <View style={{padding: 10}}>
                    <View style={{
                        opacity: 0.5,
                    }}>
                        <Text>Name</Text>
                        <TextInput style={{fontSize:16, borderBottomWidth:1, borderColor: 'CDCDCD' }}
                        placeholder='name'

                         >

                        </TextInput>
                    </View>
                    
                    </View>
                    <View style={{padding: 10}}>
                    <View style={{
                        opacity: 0.5,
                    }}>
                        <Text>UserName</Text>
                        <TextInput style={{fontSize:16, borderBottomWidth:1, borderColor: 'CDCDCD' }}
                        placeholder='User name'
                        
                         >

                        </TextInput>
                        </View>
                </View>
                <View style={{padding: 10}}>
                    <View style={{
                        opacity: 0.5,
                    }}>
                        <Text>Website</Text>
                        <TextInput style={{fontSize:16, borderBottomWidth:1, borderColor: 'CDCDCD' }}
                        placeholder='Website'
                        
                         >

                        </TextInput>
                        </View>
                </View>
                <View style={{padding: 10}}>
                    <View style={{
                        opacity: 0.5,
                    }}>
                        <Text>Bio</Text>
                        <TextInput style={{fontSize:16, borderBottomWidth:1, borderColor: 'CDCDCD' }}
                        placeholder='Bio'
                        
                         >
                        </TextInput>
                        </View>
                </View>
                <Text style={{
                    marginVertical:10,
                     padding:10,
                      color:'#68A1F6',
                       borderTopWidth: 1,
                        borderBottomWidth: 1,
                         borderColor:'#EFEFEF'
                }}>Switch to Professional Account</Text>
                 <Text style={{
                    marginVertical: 10,
                     padding: 10,
                      color:'#68A1F6',
                       borderTopWidth: 1,
                        borderBottomWidth: 1,
                         borderColor:'#EFEFEF'
                }}>Personal Information Settings</Text>
                </ScrollView>
                </SafeAreaView>
    )


//         <SafeAreaView style={{
//             flex:1,
//             paddingHorizontal:20,
//         }}>
// <View style={{flexDirection:"row",
// alignItems:'center',
// justifyContent:'space-between',
// padding:10,
// }}>
//    <TouchableOpacity onPress={() => navigation.goBack()}></TouchableOpacity>
// </View>
// </SafeAreaView>
    
}


export default Profile;

