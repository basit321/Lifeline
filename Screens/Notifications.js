

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
  import { Notifications1 } from '../Screens/Data';
  import { Menu1,Cross } from '../Components/Images';
  import { LinearGradient } from 'expo-linear-gradient'; 


const Notifications = ({navigation}) => {

  
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
<View style={{flex:1,}}>
<VStack style={{height:height,width:width*0.95,backgroundColor:"#fff",marginTop:"5%",
borderTopLeftRadius:30, flex:1
}}
 ml='auto'
>
<ScrollView style={{flex:1,paddingBottom:10}}>
  
{/* <FlatList
        data={Notifications1}
         pb='5%'
        renderItem={({ item })=>(
        
              )}
        
              keyExtractor={(item) => item.id}
         
        />
 */}
{Notifications1.map(item => (


<View style={{flex:1}} key={item.id} >
<HStack ml='5%' style={{borderBottomWidth:2,paddingBottom:20,borderColor:"#F3F3F3",flex:1
}}

mt='5%'
>

   <Image
   style={{width:50,height:50,borderRadius:5}}
   resizeMode='cover'
   source={item.pic}
   alt='123'
   />

 
<Center>
<VStack space='2'  ml='5%' >
<Text style={{fontFamily:"mulishLight",fontSize:15,color:"#4F4B4B",fontWeight:'600'}}>

{item.status}

</Text> 
<HStack style={{display:item.display}} >
<Image
source={item.likedphotos[0]}
style={{width:34,height:34}}
alt='123'
/>
<Image
source={item.likedphotos[1]}
style={{width:34,height:34}}
ml='4%'
alt='123'

/>
<Image
source={item.likedphotos[2]}
style={{width:34,height:34}}
ml='4%'
alt='123'
/>


</HStack>
<Text style={{fontFamily:"mulishLight",fontSize:12,color:"#ADADAD",}}>

{item.time}

</Text> 
</VStack>
</Center>

</HStack>


</View> 

))}
</ScrollView>


</VStack>
</View>
       </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Notifications
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
