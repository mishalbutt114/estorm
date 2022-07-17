
import React , { useState,useEffect }  from "react";
import {View, Text, SafeAreaView, StyleSheet,Dimensions, FlatList , Image, Button, ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../styles/styles";
import products from "../constants/products";
import {getAll} from '../API/category'
const {width} = Dimensions.get("screen");
const cardWidth=width/2-20;



const Home = ({ navigation }) =>{
    const [ categoryIndex , setcategoryIndex] = useState([]);
    const [category,setCategory] = useState("");
  

  const doGetCategories = async () => {
    try {
     
      const categoryIndex = await getAll();
      // console.log(categoryIndex);
      setcategoryIndex(categoryIndex.categoryList);
    } catch (error) {
      alert(error);
    }
  };

   useEffect(() => {
     doGetCategories();
     return () => {};
   }, []);

   useEffect(()=>{
        console.log("category index data in use effect =====>>>>",categoryIndex)
   },[categoryIndex])


const Category = () =>{
  


  return(

    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
         
        {categoryIndex?.map((item, index) => {
            console.log("data items in cats ======>>>>>",item)
          return(
            <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => categoryIndex(item)}>
            <View
             style={{
              backgroundColor:
              categoryIndex == index
                  ? 'tomato'
                  : '#ffccb3',
                  ...styles.categoryBtn,
              
            }}
              >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={item.image}
                  style={{height: 25, width: 25, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                  categoryIndex == index
                      ? 'black'
                      : 'black'  ,
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
          )
        })}
      </ScrollView>



  );
};


  const Card = ({product}) =>{
    return (
<TouchableOpacity  activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', product)}
        > 
     <View style={styles.card}>
   <View style={{alignItems: 'flex-end'}}>
    <View style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: product.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
    <Ionicons name='heart-outline' size={25} color={product.like ? 'red' : 'black'}/>
    </View>
  

   </View>
   <View style={{height:100, alignItems:"center"}}>
<Image style={{flex:1, resizeMode:"contain"}}
source={product.img} />
    </View>
    <Text style={{fontWeight: 'bold' , fontSize:17, marginTop:5}} >{product.name}</Text>
    <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              Rs.{product.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'tomato',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
            </View>
</View>
</TouchableOpacity>
    ) 
}




    return(
<SafeAreaView style={{
    flex:1,
    paddingHorizontal:20,
}}>
<View style={styles.header} >
<View>
    <Text style={{fontSize:20 , fontWeight:'bold'}}> Welcome to  </Text>
    <Text style={{fontSize:38  , color:'tomato' , fontWeight:'bold'}}> Estorm  </Text>
</View>

<Ionicons name='cart' size={25} color='tomato' onPress={() => navigation.navigate('Cart')}/>

</View >
<View style={{marginTop: 30, flexDirection: 'row'}}>
<View style={styles.searchContainer}>
<Ionicons name='search' size={25} style={{marginLeft:20}}/>
<TextInput style={styles.input} placeholder="Search Products"/>
</View>
<View style={styles.sortBtn}>
<Ionicons name='filter' size={25} color='white'/>
</View>
</View>
<Category/>
<FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }} 
        numColumn={2}
         data={products} 
        renderItem={({item}) => { return <Card product={item}/>;
        }}
         />
        
</SafeAreaView>


)
}

export default Home;


