import React, { useState } from "react";
import {View, Text, SafeAreaView, TextInput, ScrollView, Button} from 'react-native';
import { styles } from "../../styles/styles";
import Ionicons from '@expo/vector-icons/Ionicons';


const Signup = ({ navigation }) =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ReEnterPassword, setReEnterPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    

    return(

        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View style={{paddingTop:50, paddingHorizontal:20}}>
                <Text style={{ fontSize:35, fontWeight:'bold'}}>Register</Text>
                <Text style={{color:'grey', fontSize:18, marginVertical: 10}}>Enter Your Details To Register</Text>
                </View>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                 style={{paddingTop:5, paddingHorizontal:20}}>
                
                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Name</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='create' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your Name"
                value={name}
                dense
                onChangeText={text => setName(text)}
            />
               </View>
                </View>

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


                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Re-enter Password</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='lock' size={22} color='grey' />
                <TextInput 
                placeholder="Re-enter Password"
                value={ReEnterPassword}
                secureTextEntry={true}
                dense
                onChangeText={text => setReEnterPassword(text)}
            />
               </View>
                </View>


                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Phone</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='phone-portrait' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your Phone Number"
                value={phone}
                dense
                onChangeText={text => setPhone(text)}
            />
               </View>
                </View>


                
                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>City</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='pin' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your City"
                value={city}
                dense
                onChangeText={text => setCity(text)}
            />
               </View>
                </View>

                <View style={{marginVertical:5}}>
                    <Text style={styles.label}>Address</Text>
                    <View style={ styles.inputContainer }>
                    <Ionicons name='pin' size={22} color='grey' />
                <TextInput 
                placeholder="Enter your Address"
                value={address}
                dense
                onChangeText={text => setAddress(text)}
            />
               </View>
                </View>
                <View style={{marginVertical:25}}>
                    <Button  
                    title="Signup"
                    color="tomato" >
                        
                    </Button>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}


export default Signup;

