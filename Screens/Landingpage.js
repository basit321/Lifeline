import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView } from 'react-native';
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
  import { Ionicons } from '@expo/vector-icons'; 

const Landingpage = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <ScrollView>
    <ImageBackground style={{...styles.conatainer ,width:width,height:height}}

source={require('../Images/Main.png')}

>


<VStack style={{flex:1,justifyContent:"center",width:width*0.8,}} mx='auto'>
<Text style={{...styles.Text,fontFamily:"poppinsBold",}}>
Find your perfect 
match today
</Text>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:18}}>
We Know, finding love can be hard,
We think it sould not be
</Text>
<TouchableOpacity style={{...styles.Button,marginTop:"10%"}} activeOpacity={1} 
onPress={()=>navigation.navigate('Signup')}>
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
SIGN IN
</Text>
</VStack>
</TouchableOpacity>
<TouchableOpacity style={{...styles.Button,backgroundColor:null,
borderWidth:1,marginTop:"10%" ,borderColor:"#C0C0C0"


}} activeOpacity={1} >
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
SING UP
</Text>
</VStack>
</TouchableOpacity>

</VStack>






 </ImageBackground>

</ScrollView>
</NativeBaseProvider>

  )
}

export default Landingpage
const styles = StyleSheet.create({
   
    conatainer:{
        
     backgroundColor:"#fff",
     flex:1

    
        
    },
    Text:{
      fontSize:32,
      color:"#ffff"

    },
    Button:{
      
        height:height*0.06,
        backgroundColor:"#FF576F",
        borderRadius:22
    },
    slidemodel:{
    
        justifyContent: 'flex-end',
        margin: 0,
        
        
        width: width,
    height: height  
    
    
  },
})