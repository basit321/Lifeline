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


const Introduction1 = ({navigation}) => {
    
  return (
    <NativeBaseProvider>
    <ImageBackground style={{...styles.conatainer ,width:width,height:height}}
    
    source={require('../Images/Main.png')}
    
    >
      <StatusBar style='light'/>

<View style={{flex:1}}>
<View style={{flex:1}}>
<Image
source={require('../Images/mobiel.png')}
style={{width:width*1,height:height*0.7}}
alt='321'
resizeMode='contain'
/>

</View>
<View style={{flex:0.55}}>
<VStack style={{width:width*0.8}} mx='auto' >


<Text style={{...styles.Text,fontFamily:"poppinsBold"}}>

Welcome
</Text>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:18}}>
A app where you can do a Quick private 
video chat with people
</Text>
<HStack justifyContent='space-between' mt='10%'>
<TouchableOpacity style={{...styles.Button,backgroundColor:null}} activeOpacity={1} onPress={()=>navigation.navigate('Landingpage')}>
<VStack  my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
SKIP
</Text>
</VStack>
</TouchableOpacity>
<TouchableOpacity style={{...styles.Button}} activeOpacity={1} onPress={()=>navigation.navigate('Introduction2')}>
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
NEXT
</Text>
</VStack>
</TouchableOpacity>
</HStack>

</VStack>
<HStack mx='auto' mt='10%' space='2'>
<Box width='2' height='2' borderRadius='full' style={{backgroundColor:"#FF576F"}}>

</Box>
<Box width='2' height='2' borderRadius='full' style={{backgroundColor:"#D9D9D9"}}>

</Box><Box width='2' height='2' borderRadius='full' style={{backgroundColor:"#D9D9D9"}}>

</Box>
</HStack>
</View>


</View>

    </ImageBackground>


    </NativeBaseProvider>
  )
}

export default Introduction1
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
        width:width*0.4,
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