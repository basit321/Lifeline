

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
  import {Chatbox1} from '../Screens/Data';
  import { Menu1,Cross,Line } from '../Components/Images';
  import { LinearGradient } from 'expo-linear-gradient'; 


const Chatbox = ({navigation}) => {

  
  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
        <ImageBackground style={{...styles.conatainer, width:width,height:height,}}

source={require('../Images/Main.png')}
alt='321'
> 
<View style={{flex:0.13,}}>

</View>   
<View style={{flex:1}}>

<VStack style={{flex:1}}>
<ScrollView style={{flex:1}}>
<FlatList
pb='5%'
data={Chatbox1}
renderItem={({ item })=>(
<View style={{flex:1}}>
  <VStack mt='5%'>
 <Text style={{...styles.Text1,fontFamily:"poppinsBold",fontSize:12,color:"#EAE4E4"
 ,marginLeft:"auto",marginRight:"auto"}}>
     {item.date}
  </Text>
  <VStack style={{width:width*0.9}} mx='auto'>
  <VStack >
 
 <Box style={{width:width*0.5
    ,backgroundColor:"#fff",borderTopRightRadius:15,borderBottomEndRadius:15
    ,borderBottomStartRadius:15}} mt='5%' > 
  <VStack padding='5%'>
  <Text style={{...styles.Text1,fontFamily:"mulishLight",fontSize:12,color:"#4F4B4B" }}>
     {item.chat}
    </Text>
    


  </VStack>

 </Box>
  
 <Text style={{...styles.Text1,fontFamily:"poppinsBold",fontSize:12
 ,color:"#EAE4E4",marginLeft:'5%',marginTop:'2%'}}>
     {item.time}
  </Text>
  </VStack>
    
  <VStack ml='auto' >
 
 <Box style={{width:width*0.5
    ,backgroundColor:"#FF576F",borderTopRightRadius:15,borderTopStartRadius:15
    ,borderBottomStartRadius:15}} mt='5%' > 
  <VStack padding='5%'>
  <Text style={{...styles.Text1,fontFamily:"mulishLight",fontSize:12,color:"#fff" }}>
     {item.chat1}
    </Text>
    


  </VStack>

 </Box>
  
 <Text style={{...styles.Text1,fontFamily:"poppinsBold",fontSize:12
 ,color:"#EAE4E4",marginLeft:'5%',marginTop:'2%'}}>
     {item.time1}
  </Text>
  </VStack>
    
  </VStack>
  
  </VStack>
</View>


    )}
        
    keyExtractor={(item) => item.id}


/>




</ScrollView>


</VStack>

<View style={{flex:0.15,backgroundColor:"#fff"}}>
<HStack style={{width:width*0.9}} mx='auto' mt='5%' >

<TextInput style={{backgroundColor:"#EBEFF4",height:52,borderRadius:22,borderWidth:0, 
fontSize:14,fontFamily:"mulishLight",fontWeight:"600",width:'100%'}}

placeholder="     Search"

/>
<TouchableOpacity style={{position:"absolute",marginLeft:"75%",marginTop:"4%"}} activeOpacity={1}
 

>
<HStack space='3'>
<Line  style={{marginTop:"-1%"}}/>
<Feather name="smile" size={24} color="#4F4B4B" />
<AntDesign name="camera" size={24} color="#4F4B4B" />
</HStack>

</TouchableOpacity>


</HStack>


</View>
</View>
       </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Chatbox
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
