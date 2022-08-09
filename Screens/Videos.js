
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
    
  Avatar,
    Heading,

    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon,
    TextArea,

  

  } from "native-base"
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  import { Ionicons,AntDesign,Feather,FontAwesome5 } from '@expo/vector-icons';
  import { LinearGradient } from 'expo-linear-gradient'; 
  import { RadioButton,Checkbox } from 'react-native-paper';
const Videos = ({navigation}) => {
  return (
    <NativeBaseProvider>
    <StatusBar style='light'/>
    <View style={{...styles.conatainer,}}>

<View style={{flex:1,}}>
<View style={{flex:1,}}>
<ImageBackground source={require('../Images/profile.png')}
style={{flex:1,overflow:"hidden",borderBottomEndRadius:100,borderBottomStartRadius:100}}
resizeMode='stretch'


>
<VStack style={{flex:0.3,}}  mx='auto' width='90%'>
<HStack my='auto' justifyContent='space-between'>
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
          <Ionicons name="arrow-back" size={24} color="#ffff" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
          <FontAwesome5 name="edit" size={24} color="#5E5EC3" />
          </TouchableOpacity>
</HStack>
</VStack>


</ImageBackground>

</View>
<VStack style={{flex:0.7}}>
<VStack  mx='auto' style={{marginTop:"-20%"}} >

<LinearGradient
  colors={['#3D74CA', '#EE4C70', '#EE4C70', '#BB77CE', ]}
  start={{ x: 0.0, y: 1.0 }}
  end={{ x: 1.0, y: 1.0 }}
  style={{
    width: 120,
    height: 120,
    borderRadius: 100,
    padding: 4, // This should be the border width you want to have
    overflow: 'hidden',
  }}>
  <View
    style={{
      flex: 1,
      borderRadius: 100,
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
     <Image
     source={require('../Images/profile.png')}
    style={{flex:1,borderRadius:100}}
    resizeMode='contain'
     />

  </View>
</LinearGradient>


</VStack>
<HStack style={{width:width*0.7}} mx='auto' justifyContent='space-between'>
<VStack>
<Center>
<Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:"bold",color:"#2B3A52"}}>
 18k
</Text> 
</Center>
<Text style={{fontFamily:"mulishLight",fontSize:10,fontWeight:'600',color:"#8F9BAE"}}>
 Followers
</Text> 

</VStack>
<VStack>
<Center>
<Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:"bold",color:"#2B3A52"}}>
 10k
</Text>
</Center> 
<Text style={{fontFamily:"mulishLight",fontSize:10,fontWeight:'600',color:"#8F9BAE"}}>
 Following
</Text> 

</VStack>
</HStack>

<VStack mx='auto'>
<Text style={{fontFamily:"mulishLight",fontSize:20,fontWeight:"bold",color:"#2B3A52"}}>
 Forhad
</Text>
<Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:'600',color:"#8F9BAE"}}>
 @forhad
</Text>
</VStack>
<VStack borderBottomWidth='1'  mt='auto' style={{width:width*0.9,borderColor:'#DDDADA'}} mx='auto' >
    <HStack justifyContent='space-between'  >
     <VStack  >
     <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Profilebio')}>
    <Text style={{fontFamily:"mulishLight",fontSize:12,fontWeight:'600',color:"#C0C0C0",}}>
 About
</Text> 
</TouchableOpacity>
<VStack borderBottomWidth='0' pt='30%' borderColor='#5E5EC3' mt='auto' >

</VStack>
</VStack>
<VStack  >
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Photos')}>
    <Text style={{fontFamily:"mulishLight",fontSize:12,fontWeight:'600',color:"#C0C0C0",}}>
 Photos
</Text> 
</TouchableOpacity>
<VStack borderBottomWidth='0' pt='30%' borderColor='#5E5EC3' mt='auto' >

</VStack>
</VStack>

<VStack  >
    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Videos')}>
    <Text style={{fontFamily:"mulishLight",fontSize:12,fontWeight:'600',color:"#5E5EC3",}}>
 Videos
</Text> 
</TouchableOpacity>
<VStack borderBottomWidth='1' pt='30%' borderColor='#5E5EC3' mt='auto' >

</VStack>
</VStack>
<VStack  >
    <Text style={{fontFamily:"mulishLight",fontSize:12,fontWeight:'600',color:"#C0C0C0",}}>
 Connections
</Text> 
<VStack borderBottomWidth='0' pt='30%' borderColor='#5E5EC3' >

</VStack>
</VStack>

    </HStack>
</VStack>
</VStack>

</View>
<View style={{flex:0.7,}}>

<ScrollView style={{flex:1}}>

<VStack style={{width:width*0.9}} mx='auto' mt='5%' pb='40%' >


<HStack justifyContent='space-between'>
<Box style={{width:width*0.9,height:213,borderRadius:20}} shadow='1'>
<Image
source={require('../Images/video.png')}
style={{width:width*0.9,height:213,borderRadius:20}}

/>
</Box>

</HStack>

<HStack justifyContent='space-between' mt='5%'>
<Box style={{width:width*0.3,height:213,borderRadius:20}} shadow='1'>
<Image
source={require('../Images/person3.png')}
style={{width:width*0.3,height:213,borderRadius:20}}

/>
</Box>
<Box style={{width:width*0.5,height:213,borderRadius:20}} shadow='1'>
<Image
source={require('../Images/person4.png')}
style={{width:width*0.5,height:213,borderRadius:20}}

/>
</Box>
</HStack>


</VStack>

</ScrollView>

<VStack  position='absolute' my='60%' mx='20%' >
<TouchableOpacity style={{...styles.Button,width:width*0.6,}} activeOpacity={1} 
onPress={()=>navigation.navigate('Landingpage')}>
<VStack mx='auto' my='auto'>
<Text style={{...styles.Text,fontFamily:"mulishLight",fontSize:14,fontWeight:"bold"}}>
Sign Out 
</Text>

</VStack>
</TouchableOpacity>
</VStack>

</View>



    </View>

    </NativeBaseProvider>
   
  )
}

export default Videos
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