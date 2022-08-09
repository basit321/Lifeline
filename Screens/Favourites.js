

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
  import { Favourite1 } from '../Screens/Data';


const Favourites = ({navigation}) => {


 

  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
    
<View style={{flex:0.13,}}>

</View>
       <ScrollView style={{flex:1,backgroundColor:"#F4DDF0"}}  >
          <VStack style={{ width:width*0.9}}  mx='auto'  mt='5%'  >
      <HStack  style={{borderWidth:1,borderRadius:22,borderColor:'#C0C0C0'}} >
<TextInput style={{backgroundColor:"#fff",height:52,borderRadius:22,borderWidth:0, 
fontSize:14,fontFamily:"mulishLight",fontWeight:"600",width:'100%'}}

placeholder="     Search"

/>
<TouchableOpacity style={{position:"absolute",marginLeft:"90%",marginTop:"4%"}} activeOpacity={1}
 

>
<Feather name="search" size={24} color="#4F4B4B" />
</TouchableOpacity>
</HStack>
       
       
{Favourite1.map(item => (
  <View key={item.id} >
  <HStack style={{flex:1}} justifyContent='space-between' mt='4%' >

<Box style={{width:width*0.4,height:200,borderRadius:20}} shadow='1'>
<ImageBackground
source={item.pic1}
style={{ width:'100%',height:'100%',overflow:"hidden",borderRadius:20,}}
resizeMethod='resize'
alt='321'

>

<VStack width='90%' mx='auto' mt='5%' style={{flex:1}} >


</VStack>
<VStack mt='auto'  width='90%' mx='auto' pb='5%'>
 
 <Text style={{fontFamily:"mulishLight",fontSize:13,color:"#fff",fontWeight:'bold'}}>

 {item.name}

</Text>
<HStack space='2'>
<Center>
<Box style={{width:5,height:5,backgroundColor:item.color}} borderRadius='full' >

</Box>
</Center>
<Text style={{fontFamily:"mulishLight",fontSize:12,color:"#fff",}}>

{item.seem}

</Text>
</HStack>
 </VStack>




</ImageBackground>

</Box>

<Box style={{width:width*0.4,height:200,borderRadius:20}} shadow='1'>
<ImageBackground
source={item.pic2}
style={{ width:'100%',height:'100%',overflow:"hidden",borderRadius:20,}}
resizeMethod='resize'
alt='321'
>

<VStack width='90%' mx='auto' mt='5%' style={{flex:1}} >


</VStack>
<VStack mt='auto'  width='90%' mx='auto' pb='5%'>
 
 <Text style={{fontFamily:"mulishLight",fontSize:13,color:"#fff",fontWeight:'bold'}}>

 {item.name2}

</Text>
<HStack space='2'>
<Center>
<Box style={{width:5,height:5,backgroundColor:item.color2}} borderRadius='full' >

</Box>
</Center>
<Text style={{fontFamily:"mulishLight",fontSize:12,color:"#fff",}}>

{item.seem2}

</Text>
</HStack>
 </VStack>




</ImageBackground>

</Box>


  
</HStack>

</View> 

))}

            </VStack> 


        </ScrollView>
        </NativeBaseProvider>
        </View>

  )
}

export default Favourites
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
