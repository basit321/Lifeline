
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
  import { Menu,Cross } from '../Components/Images';
  import { LinearGradient } from 'expo-linear-gradient'; 


const Home = ({navigation}) => {

  return (
    <View style={{...styles.conatainer}}>
         <StatusBar style="dark"/>
        <NativeBaseProvider>
    
<View style={{flex:0.13,}}>

</View>
       <ScrollView style={{flex:1,backgroundColor:"#F4DDF0"}}  >
        <VStack style={{width:width*0.92}} mx='auto' mt='5%'>
        <Text style={{fontFamily:"mulishLight",fontSize:16,color:"#434242",fontWeight:"bold"}}>

Stories

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
    alt='321'
     >
<View
    style={{
      flex: 1,
      borderRadius: 100,
      backgroundColor: item.color,
      alignItems: 'center',
      justifyContent: 'center',
      padding:3,
      display:item.display
    }}>

<AntDesign name="pluscircle" size={24} color="#fff" />
    </View>


      </ImageBackground>

  </View>
</LinearGradient>
<Center>
<Text style={{fontFamily:"mulishLight",fontSize:14,color:"#434242",fontWeight:"bold"}}>

 {item.name}

    </Text>
    </Center>

</VStack>

          
              )}
        
              keyExtractor={(item) => item.id}
         horizontal={true}
         con
        />
        
        <VStack  mx='auto' mt='5%' pb='10%'>
            <Box style={{width:width*0.9,height:490,backgroundColor:"#fff"
            ,borderRadius:20}} shadow='1' mx='auto'>
       
       <TouchableOpacity activeOpacity={1} onPress={()=> navigation.navigate('Otheruserprofile')} >
         
       <Box style={{width:width*0.9,height:483,
          backgroundColor:"#fff",borderRadius:20}} shadow='4' >
            
      <ImageBackground
       style={{width:width*0.9,height:400,borderRadius:20,overflow:"hidden"}}

       source={require('../Images/dateshe.png')}
       resizeMode='cover'
       resizeMethod='auto'
       alt='321'
      
      
      >
      <VStack width='90%' mx='auto' >
            
     <Box  style={{width:109,height:33,backgroundColor:"rgba(192, 192, 192, 0.3)",borderRadius:30}} mt='5%' ml='auto'  >

     <HStack mx='auto' my='auto'>
          
     <Text style={{fontFamily:"mulishLight",fontSize:13,color:"black",fontWeight:'600'}}>

 10 Km 

    </Text>
     </HStack>



     </Box>
        
     <VStack mt='80%'>
     <Text style={{fontFamily:"mulishLight",fontSize:22,color:"#fff",fontWeight:'bold'}}>

     Charlotte Crawford

   </Text>
   <Text style={{fontFamily:"mulishLight",fontSize:13,color:"#fff",}}>

   Mumbai, India

</Text>

  </VStack>
      </VStack>


</ImageBackground>


<HStack width='80%' mx='auto' justifyContent='space-between' mt='5%'>
  
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


</HStack>

</Box>
       
       </TouchableOpacity>
       
       
        </Box>

      





          </VStack>


        </ScrollView>
        </NativeBaseProvider>
        </View>

  )
}

export default Home
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
