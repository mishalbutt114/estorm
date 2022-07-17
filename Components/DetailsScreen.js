import React from "react";
import {View, Text, SafeAreaView, Image } from 'react-native';
import { styles } from "../styles/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";

const DetailsScreen = ({navigation, route}) =>{
    const product = route.params;
    return(
<SafeAreaView style={{
    flex:1,
    paddingHorizontal:20,
}}>
    <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
    <View style={styles.header}>
    <Ionicons name='arrow-back' size={25} color='tomato' onPress={() => navigation.goBack()}/>
    <Ionicons name='cart' size={25} color='tomato' onPress={() => navigation.navigate('Cart')}/>
        </View>
        
        <View style={styles.imageContainer}>
            <Image source={ product.img } style={{resizeMode:"contain" , flex:1, height: 300}} />
        </View>
       
        <View style={styles.detailsContainer}>
            <View style={{marginLeft:20, flexDirection:"row", alignItems:'flex-end'}}>
                <View style={styles.line}/>
                <Text style={{fontSize: 18, fontWeight:'bold'}}>Best Choice</Text>
            </View>
            <View style={{ marginLeft: 20, marginTop:20, flexDirection: 'row', justifyContent:'space-between', alignItems:"center" }}>
                <Text style={{ fontSize:20, fontWeight: 'bold' }}> 
                { product.name }
                </Text>
                <View style={styles.priceTag}>
                    <Text style={{ marginLeft:15, color:'white', fontWeight: 'bold' ,fontSize:16 }}>
                        Rs. { product.price }
                        </Text>

                </View>
            </View>

<View style={{paddingHorizontal:20, marginTop:10}}>
<Text style={{ fontSize:20, fontWeight:'bold' }}> About</Text>
<Text style={{ color:'grey' , fontSize: 16, lineHeight: 22, marginTop:20 }}>
    {product.about}
</Text>
<View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={styles.buyBtn}>
              <Text
                style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
              </View>
              
            </View>
            
        </View>
       
        </View>
        </ScrollView>
         </SafeAreaView>
    )
}


export default DetailsScreen;