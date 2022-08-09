import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView,TextInput } from 'react-native';
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
  import { Ionicons,AntDesign } from '@expo/vector-icons'; 

const Signup = ({navigation}) => {
   
    
  return (
    <NativeBaseProvider>
       <StatusBar style='light'/>
    <ScrollView>
     
    <View style={{flex:1}}>
    <ImageBackground style={{...styles.conatainer ,width:width,height:height}}

source={require('../Images/Main.png')}
alt='321'
>


<View style={{flex:0.13,}}>

</View>
<VStack style={{flex:1,justifyContent:"center",}} >


<Image
source={require('../Images/logo.png')}
mx='auto'
alt='321'
/>

<VStack style={{width:width*0.8,}} mx='auto' mt='5%'>
<Text style={{...styles.Text,fontFamily:"poppinsBold",}}>
Login into 
your account
</Text>

<TextInput style={{backgroundColor:"#fff",height:52,borderRadius:22,borderWidth:0, fontSize:14,fontFamily:"mulishLight"}}

placeholder="   Username"
/>
<HStack  >
<TextInput style={{backgroundColor:"#fff",height:52,borderRadius:22,
borderWidth:0, fontSize:14, width:'100%',
fontFamily:"mulishLight",marginTop:"5%"}}

placeholder="   Password"
/>
<TouchableOpacity style={{position:"absolute",marginLeft:"90%",marginTop:"9%"}} activeOpacity={1}
 

>
<AntDesign name="eye" size={24} color='#FF576F'/>
</TouchableOpacity>
</HStack>
 
 <HStack ml='auto' mt='2%'>
 <Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:12,fontWeight:"700"}}>
 Forgot Password?
</Text>
</HStack>
<TouchableOpacity style={{...styles.Button,marginTop:"5%"}} activeOpacity={1} 
onPress={()=>navigation.navigate('Dashboard')}>
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
SIGN IN
</Text>

</VStack>
</TouchableOpacity>
<HStack>
    <VStack borderTopWidth='2' mt='10%' width='100%' mx='auto' borderColor='#525252'>
     </VStack>
       <TouchableOpacity style={{position:"absolute",marginLeft:"42%",marginTop:"4%"}}>
        <Image
        source={require('../Images/or.png')}
        alt='321'
        />

       </TouchableOpacity>
</HStack>


<HStack justifyContent='space-between' mt='10%' >
<TouchableOpacity style={{...styles.Button,width:width*0.38,backgroundColor:null,borderWidth:1,
borderColor:"#fff"
}}>
<HStack  my='auto' mx='auto' space='2' >
<Image
source={require('../Images/G.png')}
alt='321'
/>
<Center>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
GOOGLE
</Text>
</Center>
</HStack>
</TouchableOpacity>
<TouchableOpacity style={{...styles.Button, width:width*0.38,backgroundColor:"#1976D2"}} activeOpacity={1} onPress={()=>navigation.navigate('Introduction2')}>
<HStack  my='auto' mx='auto' space='2' >
<Image
source={require('../Images/Facebook.png')}
alt='311'
/>
<Center>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
Facebook
</Text>
</Center>
</HStack>
</TouchableOpacity>
</HStack>
<HStack mt='10%' mx='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:12,fontWeight:"700"}}>
Don’t have an account?{'  '}
<Text style={{color:'#FF576F'}}>
Create Now
</Text>
</Text>
</HStack>
</VStack>



</VStack>






 </ImageBackground>
</View>
</ScrollView>
</NativeBaseProvider>

  )
}

export default Signup
const styles = StyleSheet.create({
   
    conatainer:{
        
     backgroundColor:"#fff",
     flex:1

    
        
    },
    Text:{
      fontSize:32,
      color:"#ffff"

    },
    Text1:{
        fontSize:18,
        color:"#ffff",

        
  
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