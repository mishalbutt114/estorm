import React from "react";
import {View, Text, SafeAreaView} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "../styles/styles";


const Cart = () =>{
    return(
        <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
            <View style={styles.header}>
            <Ionicons name='arrow-back' size={25} color='tomato' onPress={() => navigation.goBack()}/>
            <Text style={{color: 'tomato', alignItems:'center'}}>Shopping Cart</Text>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}


export default Cart;

