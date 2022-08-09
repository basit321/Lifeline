

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
  import { Chat1,Data } from '../Screens/Data';
  import { Menu1,Cross } from '../Components/Images';
  import { LinearGradient } from 'expo-linear-gradient'; 


const Chat = ({navigation}) => {

  
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
<View style={{flex:1,}}>
<View style={{flex:0.3}}>
<VStack style={{width:width*0.92}} mx='auto' mt='3%'>
        <Text style={{fontFamily:"mulishLight",fontSize:16,color:"#fff",fontWeight:"bold"}}>

Active Users

   </Text>



        </VStack>

        <FlatList
        data={Data}
        mt='3%'
         
        renderItem={({ item })=>(
        
          <VStack   style={{flex:1,padding:5}}>
            
          <LinearGradient
  colors={['#3D74CA', '#EE4C70', '#EE4C70', '#BB77CE', ]}
  start={{ x: 0.0, y: 1.0 }}
  end={{ x: 1.0, y: 1.0 }}
  style={{
    width: 72,
    height: 72,
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
      padding:2,
    }}>
      
     <ImageBackground
     source={item.image}
    style={{ width:'100%',height:'100%',overflow:"hidden",borderRadius:100,}}
    resizeMethod='resize'
    
     >


      </ImageBackground>

  </View>
</LinearGradient>
<View
    style={{
      flex: 1,
      borderRadius: 100,
    position:"absolute",
    marginTop:'80%',
    marginLeft:"80%"
    }}>

<FontAwesome name="circle" size={16} color="#43BC0A" />
    </View>

<Center>
<Text style={{fontFamily:"mulishLight",fontSize:14,color:"#fff",fontWeight:"bold"}}>

 {item.name}

    </Text>
    </Center>

</VStack>

          
              )}
        
              keyExtractor={(item) => item.id}
         horizontal={true}
         con
        />
</View>
<View style={{flex:1}}>
<VStack style={{height:height,width:width*0.95,backgroundColor:"#fff",marginTop:"5%",
borderTopLeftRadius:30,flex:1}}
 ml='auto'
>
<ScrollView style={{flex:1}}>
  

{Chat1.map(item => (


<TouchableOpacity style={{flex:1}} activeOpacit={1} onPress={()=>navigation.navigate('Chatbox')}

key={item.id}
>
        <VStack borderBottomWidth='2' ml='5%' paddingY='5%' style={{borderColor:"#F3F3F3"}}>
          <HStack width='97%' mx='auto'>
            <VStack>
            
               <Image
               source={item.pfp}
               style={{width:50,height:50}}
               resizeMode='contain'
               borderRadius='full'
               alt='321'
               
               />
                <Box style={{width:18,height:18
                ,backgroundColor:"#FF7A00",display:item.display}} borderRadius='full' mt='-40%'ml='8'>
                 <HStack mx='auto' my='auto'>
<Text style={{fontFamily:"mulishLight",fontSize:10,color:"#fff",}}>

{item.number}

</Text>

                 </HStack>

                </Box>
              </VStack> 
    <Center ml='5%'>
    <VStack>
  <Text style={{fontFamily:"mulishLight",fontSize:15,color:item.color,fontWeight:item.Weight}}>

{item.name}

</Text>
<Text style={{fontFamily:"mulishLight",fontSize:11,color:item.color,fontWeight:"600"}}>

{item.chat}

</Text>
</VStack>
</Center>

  <Center ml='auto' >
  <Text style={{fontFamily:"mulishLight",fontSize:11,color:'#ADADAD'}}>

 {item.Time}

</Text>

  </Center>

          </HStack>

        </VStack>


     
        </TouchableOpacity>  

))}


</ScrollView>


</VStack> 
</View>
</View>
       </ImageBackground>
        </NativeBaseProvider>
        </View>

  )
}

export default Chat
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
