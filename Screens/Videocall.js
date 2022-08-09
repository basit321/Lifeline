

import React from 'react'
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView,TextInput} from 'react-native';
import {
    Box,
    FlatList,
    Image,
    HStack,
    VStack,
    Center,
    NativeBaseProvider,

    ArrowBackIcon,
    Button,
    Radio,
    Select,
    CheckIcon,
    Link,
    
  
    Heading,
    Input,
    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon,
    TextArea,


  

  } from "native-base"

  import Modal from 'react-native-modal'; 
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  import { Ionicons,AntDesign,Entypo,Feather,FontAwesome } from '@expo/vector-icons'; 
  
  

const Videocall = ({navigation}) => {

  
  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
        <ImageBackground style={{...styles.conatainer, width:width,height:height,}}

source={require('../Images/videocall.png')}
resizeMode='cover'
alt='321'
> 
<View style={{flex:0.13,}}>

</View>  
<View style={{flex:1}}>
<ScrollView style={{flex:1}}>
<VStack style={{width:width*0.9}} mx='auto' mt='80%'>


<Box style={{width:200,height:200,borderRadius:10,backgroundColor:"red",padding:2}} ml='auto'>

<Image
style={{flex:1,borderRadius:10}}
source={require('../Images/livep.png')}
alt='321'
/>



</Box>

<HStack mt='10%' justifyContent='space-between'>
<Center>
<Ionicons name="call" size={30} color="white" />
</Center>

<Box style={{width:80,height:80,backgroundColor:"#FF576F"}} borderRadius='full' shadow='2' >
  <HStack mx='auto'my='auto'>
  <Entypo name="cross" size={40} color="#fff" />
  
  </HStack>


</Box>
<Center>
<FontAwesome name="microphone" size={30} color="#fff" />
</Center>
</HStack>




</VStack>




</ScrollView>



</View>


       </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Videocall
const styles = StyleSheet.create({
   
  conatainer:{
      
   backgroundColor:"#fff",
   flex:1

  
      
  },
  
    maincont:{
      paddingBottom:"20%",


      
    },
    Text:{
      fontSize:32,
      color:"#ffff"

    },
    Text1:{
        fontSize:20,
        color:"#fff",

        
  
      },
    Button:{
      
        height:height*0.06,
        backgroundColor:"#FF576F",
        borderRadius:22
    },
  })
