import React from "react";
import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  LogBox,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  Homes,
  Inactivehome,
  Activetag,
  Inactivetag,
  Activeheart,
  Inactiveheart,
  Activenoti,
  Inactivenoti,
  ActiveChat,
  Inactivechat,
} from "./Images";
import { NativeBaseProvider, Center, VStack } from "native-base";
import Home from "../Screens/Home";
import Event from "../Screens/Event";
import Notifications from "../Screens/Notifications";
import Favourites from "../Screens/Favourites";
import Chat from "../Screens/Chat";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import { Button, HStack } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Menu1, Cross, Menu } from "../Components/Images";

const Tab = createBottomTabNavigator();
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

LogBox.ignoreAllLogs();

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

const Bottomtab = ({ props, navigation }) => {
  const SlideEventScreen = () => (
    <Animated.View
      entering={SlideInRight.duration(400)}
      style={{ ...styles.conatainer }}
    >
      <Event navigation={navigation} />
    </Animated.View>
  );

  const SlideHomeScreen = () => (
    <Animated.View entering={SlideInLeft} style={styles.conatainer}>
      <Home navigation={navigation} />
    </Animated.View>
  );
  const SlideFavouritesScreen = () => (
    <Animated.View
      entering={SlideInRight.duration(400)}
      style={styles.conatainer}
    >
      <Favourites navigation={navigation} />
    </Animated.View>
  );

  const SlideNotifcationScreen = () => (
    <Animated.View
      entering={SlideInRight.duration(400)}
      style={styles.conatainer}
    >
      <Notifications navigation={navigation} />
    </Animated.View>
  );
  const SlideChatScreen = () => (
    <Animated.View
      entering={SlideInRight.duration(400)}
      style={styles.conatainer}
    >
      <Chat navigation={navigation} />
    </Animated.View>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#FF576F",
        tabBarInactiveTintColor: "#C0C0C0",
        tabBarStyle: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={SlideHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <Homes /> : <Inactivehome />),

          headerShown: true,
          headerTransparent: true,

          headerTitle: () => (
            <Text style={{ ...styles.Text, fontFamily: "poppinsBold" }}>
              Discover
            </Text>
          ),

          headerLeft: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Profilebio")}
                  style={{ marginLeft: "15%" }}
                >
                  <Image source={require("../Images/Ellipse.png")} alt="321" />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
          headerRight: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Intrest")}
                  style={{ marginRight: "15%" }}
                >
                  <Menu />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={SlideEventScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <Activetag /> : <Inactivetag />,

          headerShown: true,
          headerTransparent: true,
          title: null,

          headerLeft: () => (
            <NativeBaseProvider>
              <VStack mt="5%" ml="5%" style={{ width: width * 0.9 }}>
                <Text style={{ ...styles.Text1, fontFamily: "poppinsBold" }}>
                  Category Waiting Room
                </Text>
              </VStack>
            </NativeBaseProvider>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={SlideFavouritesScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <Text style={{ ...styles.Text, fontFamily: "poppinsBold" }}>
              Favourite
            </Text>
          ),

          headerLeft: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Profilebio")}
                  style={{ marginLeft: "15%" }}
                >
                  <Image source={require("../Images/Ellipse.png")} alt="123" />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
          headerRight: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Intrest")}
                  style={{ marginRight: "15%" }}
                >
                  <Menu />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <Activeheart /> : <Inactiveheart />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SlideNotifcationScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <Text style={{ ...styles.Text1, fontFamily: "poppinsBold" }}>
              Notifications
            </Text>
          ),

          headerLeft: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Profilebio")}
                  style={{ marginLeft: "15%" }}
                >
                  <Image source={require("../Images/Ellipse.png")} alt="123" />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
          headerRight: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Intrest")}
                  style={{ marginRight: "15%" }}
                >
                  <Menu1 />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),

          tabBarIcon: ({ focused }) =>
            focused ? <Activenoti /> : <Inactivenoti />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SlideChatScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => (
            <Text style={{ ...styles.Text1, fontFamily: "poppinsBold" }}>
              Chats/ Message
            </Text>
          ),

          headerLeft: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Profilebio")}
                  style={{ marginLeft: "15%" }}
                >
                  <Image source={require("../Images/Ellipse.png")} />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),
          headerRight: () => (
            <NativeBaseProvider>
              <Center mt="5%">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Intrest")}
                  style={{ marginRight: "15%" }}
                >
                  <Menu1 />
                </TouchableOpacity>
              </Center>
            </NativeBaseProvider>
          ),

          tabBarIcon: ({ focused }) =>
            focused ? <ActiveChat /> : <Inactivechat />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Text1: {
    fontSize: 20,
    color: "#fff",
  },
  Text: {
    fontSize: 20,
    color: "#FF576F",
  },
});
