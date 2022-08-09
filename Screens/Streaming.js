

import React from 'react'
import { useState,useEffect } from 'react'
import { Livecall } from './Data';

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
  
  

const Streaming = ({navigation}) => {

  
  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
        <ImageBackground style={{...styles.conatainer, width:width,height:height,}}

source={require('../Images/videocall.png')}
resizeMode='cover'
> 
    
<View style={{flex:0.13,}}>

</View>
<View style={{flex:1,justifyContent:'flex-end'}}>



{Livecall.map(item => (
  
  <VStack style={{width:width*0.9}} mx='auto'   key={item.id}>
  
     <HStack space='4' mt='5%'>
      <Image
      style={{width:40,height:40}}
      borderRadius='full'
      source={item.pic}
      resizeMode='contain'
      />
      <Center>
      <Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:"700",color:"#fff"}}>
        {item.name}
       </Text>
       <Text style={{fontFamily:"mulishLight",fontSize:12,fontWeight:"400",color:"#E7E5E5"}}>
        {item.message}
       </Text>
       

      </Center>
      </HStack>


  </VStack>
 

  ))}

 <HStack style={{width:width*0.9}} mx='auto' mt='5%' space='3'>
 <TextInput style={{backgroundColor:"rgba(235, 239, 244, 0.4)",height:50
 ,borderRadius:22,borderWidth:0, 
fontSize:14,fontFamily:"mulishLight",fontWeight:"400"
,width:'70%',color:"#fff",borderWidth:1,borderColor:'#FFFAFE99'

}}

placeholder="     Type here ....."
placeholderTextColor='#fff'

/>
<Center>
<Box style={{width:38,height:38,backgroundColor:"#5E5EC3"}} borderRadius='full'>
<HStack mx='auto' my='auto'>

<FontAwesome name="send" size={20} color="#fff" />

</HStack>
</Box>
</Center>
<Center>
<Box style={{width:38,height:38,backgroundColor:"#FF576F", borderRadius:20}} borderRadius='full'>
<HStack mx='auto' my='auto'>

<AntDesign name="heart"  size={20} color="#fff" />

</HStack>
</Box>
</Center>
 </HStack>
</View>
       </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Streaming
const styles = StyleSheet.create({
   
  conatainer:{
      
   backgroundColor:"#fff",
   flex:1,
   paddingBottom:10,

  
      
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
