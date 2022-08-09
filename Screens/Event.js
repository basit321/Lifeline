

import React from 'react'
import { useState,useEffect } from 'react'
import {Event1} from "../Screens/Data"
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
  import { Ionicons,AntDesign,Entypo,Feather } from '@expo/vector-icons'; 
  import { Menu,Cross } from '../Components/Images';
  import { LinearGradient } from 'expo-linear-gradient'; 
  import { Datting,Hang,Charc,Bed } from '../Components/Images';


const Event = ({navigation}) => {


 
  
  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
        <ImageBackground style={{...styles.conatainer, width:width,height:height,}}

source={require('../Images/Main.png')}
alyt='123'
> 
<View style={{flex:0.13,}}>

</View>
<View style={{flex:1}}> 
<VStack style={{width:width*0.9}} mx='auto' mt='20%' >
<HStack justifyContent='space-between'>
  <Box style={{width:142,height:132,backgroundColor:"#fff",borderRadius:5}}>
   <VStack mx='auto' my='auto' space='3'>
  <Center>
<Datting/>
</Center>
  <Center>
  <Text style={{fontFamily:"mulishLight",fontSize:16,fontWeight:"700",color:"#4F4B4B"}}>
  Speed Dating
                  </Text>
  </Center>
   </VStack>
  </Box>
  <Box style={{width:142,height:132,backgroundColor:"#fff",borderRadius:5}}>
   <VStack mx='auto' my='auto' space='3'>
  <Center>
<Hang/>
</Center>
  <Center>
  <Text style={{fontFamily:"mulishLight",fontSize:16,fontWeight:"700",color:"#4F4B4B"}}>
  Hangout Room
                  </Text>
  </Center>
   </VStack>
  </Box>
</HStack>
<HStack justifyContent='space-between' mt='10%' >
  <Box style={{width:142,height:132,backgroundColor:"#fff",borderRadius:5}}>
   <VStack mx='auto' my='auto' space='3'>
  <Center>
<Charc/>
</Center>
  <Center>
  <Text style={{fontFamily:"mulishLight",fontSize:16,fontWeight:"700",color:"#4F4B4B"}}>
  Celebrity Gist
                  </Text>
  </Center>
   </VStack>
  </Box>
  <Box style={{width:142,height:132,backgroundColor:"#fff",borderRadius:5}}>
   <VStack mx='auto' my='auto' space='3'>
  <Center>
<Bed/>
</Center>
  <Center>
  <Text style={{fontFamily:"mulishLight",fontSize:16,fontWeight:"700",color:"#4F4B4B"}}>
  My Room
                  </Text>
  </Center>
   </VStack>
  </Box>
</HStack>


</VStack>

</View>
     </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Event
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
        color:"#FF576F",

        
  
      },
    Button:{
      
        height:height*0.06,
        backgroundColor:"#FF576F",
        borderRadius:22
    },
  })
