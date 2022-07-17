import React, {useState} from "react";
import {View, Text, SafeAreaView, ScrollView, TextInput, Button} from 'react-native';
import { styles } from "../../styles/styles";
import Ionicons from '@expo/vector-icons/Ionicons';



const Login = ({ navigation }) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View style={{paddingTop:50, paddingHorizontal:20}}>
                <Text style={{ fontSize:35, fontWeight:'bold'}}>Login</Text>
                <Text style={{color:'grey', fontSize:18, marginVertical: 10}}>Enter Your Details To Login</Text>
                </View>
                <ScrollView style={{paddingTop: 45, paddingHorizontal:20}}>
                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Email</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='mail' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your Email Address"
                value={email}
                dense
                onChangeText={text => setEmail(text)}
            />
               </View>
                </View>


                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Password</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='lock' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your Password"
                value={password}
                secureTextEntry={true}
                dense
                onChangeText={text => setPassword(text)}
            />
               </View>
                </View>

                <View style={{marginVertical:25}}>
                    <Button  
                    title="Login"
                    color="tomato" >
                        
                    </Button>
                </View>


                </ScrollView>
        </SafeAreaView>
    )
}


export default Login;

