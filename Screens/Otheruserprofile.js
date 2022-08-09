import React from 'react'
import { useState,useEffect } from 'react'
import {Data} from "../Screens/Data"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView} from 'react-native';
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
  import { Ionicons,AntDesign,Entypo } from '@expo/vector-icons'; 

const Otheruserprofile = ({navigation}) => {

  return (
    <NativeBaseProvider>
    <StatusBar style='light'/>
    <View style={{...styles.conatainer,}}>
    
   
    <ImageBackground style={{...styles.conatainer, width:width,height:height,}}

source={require('../Images/dateshe.png')}

>
<View style={{flex:1}}>
<View style={{flex:0.2,}}>
<HStack width='90%' mx='auto' mt='auto' justifyContent='space-between'>
<Center>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
          <Ionicons name="arrow-back" size={24} color="#ffff" />
          </TouchableOpacity>
</Center>
          <Box  style={{width:109,height:33,backgroundColor:"rgba(192, 192, 192, 0.3)",borderRadius:30}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"black",fontWeight:'600'}}>

10 Km 

</Text>
</HStack>



</Box>
   
</HStack>
</View>
<HStack width='80%' mx='auto' justifyContent='space-between' mt='auto' pb='5%'>
  
<Box style={{width:46,height:46,backgroundColor:"#fff"}} borderRadius='full' shadow='2' >
  <HStack mx='auto'my='auto'>

  <Entypo name="cross" size={24} color="#4F4B4B" />
  
  </HStack>


</Box>
<Box style={{width:46,height:46,backgroundColor:"#15B212"}} borderRadius='full' shadow='2' >
  <HStack mx='auto'my='auto'>

  <Ionicons name="checkmark-sharp" size={24} color="white" />
  
  </HStack>


</Box>
<Box style={{width:46,height:46,backgroundColor:"#FF576F"}} borderRadius='full' shadow='2' >
  <HStack mx='auto'my='auto'>

  <AntDesign name="heart" size={24} color="#fff" />
  
  </HStack>


</Box>
<Box style={{width:46,height:46,backgroundColor:"#5E5EC3"}} borderRadius='full' shadow='2' >
  <HStack mx='auto'my='auto'>

  <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
  
  </HStack>


</Box>



</HStack>

</View>
<View style={{flex:0.5,backgroundColor:"#fff",borderTopLeftRadius:30,borderTopRightRadius:30}}>
<ScrollView style={{flex:1}}>

<VStack width='90%' mx='auto' mt='5%' pb='10%'>
<HStack justifyContent='space-between'>
  <VStack>
<Text style={{fontFamily:"mulishLight",fontSize:22,color:"#4F4B4B",fontWeight:'bold'}}>

Charlotte Crawford

</Text>
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",}}>

Mumbai, India

</Text>
</VStack>
<TouchableOpacity style={{...styles.Button,}} activeOpacity={1} 
>
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,}}>
 22 years
</Text>

</VStack>
</TouchableOpacity>


    
</HStack>
<VStack mt='2%'>
<Text style={{fontFamily:"mulishLight",fontSize:14,color:"#C0C0C0",fontWeight:"bold"}}>

    About 

    </Text>

    <Text style={{fontFamily:"mulishLight",fontSize:12,color:"#4F4B4B"}}>

    A good listener, I love having a good talk to know earch 
other’s side.

</Text>




</VStack>
<VStack mt='2%'>
<Text style={{fontFamily:"mulishLight",fontSize:14,color:"#C0C0C0",fontWeight:"bold"}}>

    Interest

    </Text>

    <HStack justifyContent='space-between' width='70%'>
      
    <Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>

<Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>



    </HStack>

    <HStack justifyContent='space-between' width='70%'>
      
    <Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>

<Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>



    </HStack>

    <HStack justifyContent='space-between' width='70%'>
      
    <Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>

<Box  style={{width:109,height:33,backgroundColor:"#fff",borderRadius:30
    ,borderWidth:1,borderColor:'#C0C0C0'}} mt='5%'>

<HStack mx='auto' my='auto'>
     
<Text style={{fontFamily:"mulishLight",fontSize:13,color:"#4F4B4B",fontWeight:'600'}}>
Nature
 
</Text>
</HStack>



</Box>



    </HStack>




</VStack>

</VStack>



</ScrollView>


</View>

    </ImageBackground>
    </View>
    </NativeBaseProvider>
  )
}

export default Otheruserprofile
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
      
        width:77,
        height:32,
        backgroundColor:"#FF576F",
        
    },
    
})