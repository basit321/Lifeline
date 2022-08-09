import React from 'react';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect,useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text , LogBox ,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import { NativeBaseProvider,Center,Image, HStack,Box, VStack } from 'native-base';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Menu1,Cross,Menu } from './Components/Images'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator,TransitionPresets,CardStyleInterpolators} from "@react-navigation/stack"
import Introduction1 from './Screens/Introduction1';
import Introduction2 from './Screens/Introduction2';
import Introduction3 from './Screens/Introduction3.';
import Landingpage from './Screens/Landingpage';
import Signup from './Screens/Singup';
import Bottomtab from './Components/Bottomtab';
import Intrest from './Screens/Intrest';
import Profilebio from './Screens/Profilebio';
import Photos from './Screens/photos';
import Videos from './Screens/Videos';
import AppLoading from 'expo-app-loading';
import Otheruserprofile from './Screens/Otheruserprofile';
import Chatbox from './Screens/Chatbox';
import Videocall from './Screens/Videocall';
import Streaming from './Screens/Streaming';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

const fetchFonts =async () => {
  try{ 
    
    await SplashScreen.preventAutoHideAsync();
    await SplashScreen.hideAsync();
    await Font.loadAsync({
    'robotoRegular': require('./fonts/robotoRegular.ttf'),
    'poppinsBold': require('./fonts/poppinsBold.ttf'),
    'mulishLight': require('./fonts/mulishLight.ttf')


  
  })
  await SplashScreen.hideAsync();
}
catch (e) {
  console.warn(e);
}
}

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};


const Tabnav = ({ route, navigation }) => {


  return (
    <View style={styles.conatainer}>

      <Bottomtab navigation={navigation} />
    </View>



  )
}






const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  

  if (!fontLoaded) {
    
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
        
      />
      

    )
    
  }
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Signup'   screenOptions={{ headerShown: false,
    gestureDirection:"horizontal",gestureEnabled:true,
    cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
    headerTitleAlign:"center",
   headerStyle:{
    backgroundColor:"blue"
   }
   
       
  
  }} >
     <Stack.Screen name="Introduction1" component={Introduction1}   />
     <Stack.Screen name="Introduction2" component={Introduction2}  />
     <Stack.Screen name="Introduction3" component={Introduction3}  />
     <Stack.Screen name="Landingpage" component={Landingpage}  />
     <Stack.Screen name="Signup" component={Signup}  options={({ navigation }) =>({

headerShown: true,
headerTransparent: true,
headerTitle: () =>(

   <Text style={{...styles.Text1,fontFamily:"poppinsBold", }}>
  Signup
  </Text>
),
 
headerLeft:()=>(
<TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} style={{marginLeft:"10%"}}>
          <Ionicons name="arrow-back" size={24} color="#ffff" />
          </TouchableOpacity>

)



     })}  />
     <Stack.Screen name="Dashboard" component={Tabnav}  />
     <Stack.Screen name="Intrest" component={Intrest}  />
     <Stack.Screen name="Profilebio" component={Profilebio}  />
     <Stack.Screen name="Photos" component={Photos}  />
     <Stack.Screen name="Videos" component={Videos}  />
     <Stack.Screen name="Otheruserprofile" component={Otheruserprofile}  />
     <Stack.Screen name="Streaming" component={Streaming}
     options={({ navigation }) =>({

     
    
      headerShown: true,
      headerTransparent: true,
      title:null,
      
      headerLeft: () =>(
      
        <NativeBaseProvider>
          <HStack space='2' ml='7%' mt='5%'>
            <Box style={{width:62,height:30,backgroundColor:"#FF576F",borderRadius:2}}>
              <HStack mx='auto' my='auto' space='2'>
                <Center>
                <Box style={{width:6,height:6,backgroundColor:'#fff'}} borderRadius='full'>

                </Box>
                </Center>
                <Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:"400",color:"#fff"}}>
                  Live
                  </Text>
              </HStack>
            </Box>
            <Box style={{width:72,height:30,backgroundColor:"#fff",borderRadius:2}}>
              <HStack mx='auto' my='auto' space='2'>
                <Center>
                <Ionicons name="eye" size={20} color="#4F4B4B" />
                </Center>
                <Text style={{fontFamily:"mulishLight",fontSize:14,fontWeight:"400",color:"#4F4B4B"}}>
                  400
                  </Text>
              </HStack>
            </Box>
          
          </HStack>
      
      </NativeBaseProvider>
      ),
      headerRight:()=>(
      <NativeBaseProvider>
        <Center>
        <HStack mr='7%' mt='5%' >
       <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
       
        <Box style={{width:32,height:32,backgroundColor:'#fff',borderRadius:2}}>
          <VStack mx='auto' my='auto'>
          <Entypo name="cross" size={20} color="#4F4B4B" /> 
          </VStack>

        </Box>


      </TouchableOpacity>
      
      </HStack>
      </Center>
      </NativeBaseProvider>
      
      
      )
      
      
      
      })}
     
     
     
     
     />
     

     <Stack.Screen name="Videocall" component={Videocall} options={({ navigation }) =>({

     
    
headerShown: true,
headerTransparent: true,
title:null,

headerLeft: () =>(

  <NativeBaseProvider>
    <HStack space='2' ml='7%'>

    <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
          <Ionicons name="arrow-back" size={30} color="#ffff" />
          </TouchableOpacity>
        
       
    </HStack>

</NativeBaseProvider>
),
headerRight:()=>(
<NativeBaseProvider>
  <Center>
  <HStack mr='7%' space='2'>
 <TouchableOpacity activeOpacity={1}  >
 <MaterialCommunityIcons name="camera-flip" size={30} color="#fff" />

</TouchableOpacity>
</HStack>
</Center>
</NativeBaseProvider>


)



})}  />
     

     <Stack.Screen name="Chatbox" component={Chatbox} options={({ navigation }) =>({

     
    
headerShown: true,
headerTransparent: true,
title:null,

headerLeft: () =>(

  <NativeBaseProvider>
    <HStack space='2' ml='7%'>

    <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.goBack()} >
          <Ionicons name="arrow-back" size={30} color="#ffff" />
          </TouchableOpacity>
        <Box style={{width:42,height:42,backgroundColor:"#fff"}} borderRadius='full'>
          <View style={{flex:1,padding:1}}>
            <Image
            source={require('./Images/dateshe.png')}
            style={{flex:1}}
            borderRadius='full'
            alt='321'
            />

          </View>

        </Box>
        <Center>
        <Text style={{...styles.Text1,fontFamily:"mulishLight",fontWeight:"500" }}>
        Alina Doe
    </Text>
    <Text style={{...styles.Text1,fontFamily:"mulishLight",fontSize:12 }}>
     Online
    </Text>
    

    </Center>
    </HStack>

</NativeBaseProvider>
),
headerRight:()=>(
<NativeBaseProvider>
  <Center>
  <HStack mr='7%' space='2'>
 <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('Videocall')} >
 <MaterialCommunityIcons name="video-outline" size={30} color="#fff" />

</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Streaming')}>
<Ionicons name="call-outline" size={30} color="#fff" />

</TouchableOpacity>
</HStack>
</Center>
</NativeBaseProvider>


)



})}
 />















     
     </Stack.Navigator>
     </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
   
  conatainer:{
      
   backgroundColor:"#fff",
   flex:1

  
      
  },
  Text1:{
    fontSize:18,
    color:"#fff",

    

  },
});