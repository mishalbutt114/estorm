import React from "react";
import { View } from "react-native-web";

const Input = ({
    label,
    IconName,
    error,
    password,
    onFocus = ( ) =>{},
    ...props
}) =>{
    return <View style={{ marginBottom: 20 }}>
       <Text>{label}</Text> 
    </View>
}

export default Input;