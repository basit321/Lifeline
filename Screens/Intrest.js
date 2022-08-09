import React from "react";
import { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
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
  Form,
  FormControl,
  Item,
  Label,
  ArrowDownIcon,
  TextArea,
} from "native-base";

import Modal from "react-native-modal";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { RadioButton, Checkbox } from "react-native-paper";

const Intrest = ({ navigation }) => {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerTitle: () => (
      <Text style={{ ...styles.Text1, fontFamily: "poppinsBold" }}>
        Serach by Intrest
      </Text>
    ),

    headerLeft: () => (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.goBack()}
        style={{ marginLeft: "10%" }}
      >
        <Ionicons name="arrow-back" size={24} color="#ffff" />
      </TouchableOpacity>
    ),
  });
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100]);
  const [checked, setChecked] = React.useState("first");
  const [checkeds, setCheckeds] = React.useState(false);

  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <View style={{ ...styles.conatainer }}>
        <ImageBackground
          style={{ ...styles.conatainer, width: width, height: height }}
          source={require("../Images/Main.png")}
        >
          <View style={{ flex: 0.15 }}></View>
          <ScrollView style={{ flex: 1 }}>
            <VStack
              style={{
                width: width * 0.93,
                justifyContent: "center",
                paddingBottom: "20%",
              }}
              mx="auto"
            >
              <HStack>
                <TextInput
                  style={{
                    backgroundColor: "#fff",
                    height: 52,
                    borderRadius: 22,
                    borderWidth: 0,
                    fontSize: 14,
                    fontFamily: "mulishLight",
                    fontWeight: "600",
                    width: "100%",
                  }}
                  placeholder="     Search"
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    marginLeft: "90%",
                    marginTop: "4%",
                  }}
                  activeOpacity={1}
                >
                  <Feather name="search" size={24} color="#4F4B4B" />
                </TouchableOpacity>
              </HStack>

              <VStack style={{ width: width * 0.87 }} mx="auto" mt="5%">
                <VStack>
                  <Text
                    style={{
                      ...styles.Text1,
                      fontFamily: "mulishLight",
                      fontWeight: "bold",
                      fontSize: 13,
                      color: "#C0C0C0",
                    }}
                  >
                    Distance
                  </Text>
                  <VStack mx="auto">
                    <MultiSlider
                      markerStyle={{
                        height: 20,
                        width: 20,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                        borderWidth: 2,
                        borderColor: "#FF576F",
                      }}
                      pressedMarkerStyle={{
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        backgroundColor: "#fff",
                      }}
                      selectedStyle={{
                        backgroundColor: "#fff",
                      }}
                      trackStyle={{
                        backgroundColor: "#CECECE",
                      }}
                      touchDimensions={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        slipDisplacement: 40,
                      }}
                      values={[multiSliderValue[0], multiSliderValue[1]]}
                      sliderLength={width * 0.84}
                      min={0}
                      max={100}
                      allowOverlap={false}
                      minMarkerOverlapDistance={10}
                    />
                  </VStack>

                  <HStack justifyContent="space-between">
                    <Text
                      style={{
                        ...styles.Text1,
                        fontFamily: "mulishLight",
                        fontWeight: "700",
                        fontSize: 13,
                        color: "#fff",
                      }}
                    >
                      0 km
                    </Text>

                    <Text
                      style={{
                        ...styles.Text1,
                        fontFamily: "mulishLight",
                        fontWeight: "700",
                        fontSize: 13,
                        color: "#fff",
                      }}
                    >
                      100 km
                    </Text>
                  </HStack>
                </VStack>
                <VStack mt="5%">
                  <Text
                    style={{
                      ...styles.Text1,
                      fontFamily: "mulishLight",
                      fontWeight: "bold",
                      fontSize: 13,
                      color: "#C0C0C0",
                    }}
                  >
                    Age
                  </Text>
                  <VStack mx="auto">
                    <MultiSlider
                      markerStyle={{
                        height: 20,
                        width: 20,
                        borderRadius: 50,
                        backgroundColor: "#fff",
                        borderWidth: 2,
                        borderColor: "#FF576F",
                      }}
                      pressedMarkerStyle={{
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        backgroundColor: "#fff",
                      }}
                      selectedStyle={{
                        backgroundColor: "#fff",
                      }}
                      trackStyle={{
                        backgroundColor: "#CECECE",
                      }}
                      touchDimensions={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        slipDisplacement: 40,
                      }}
                      values={[multiSliderValue[0], multiSliderValue[1]]}
                      sliderLength={width * 0.84}
                      min={0}
                      max={100}
                      allowOverlap={false}
                      minMarkerOverlapDistance={10}
                    />
                  </VStack>

                  <HStack justifyContent="space-between">
                    <Text
                      style={{
                        ...styles.Text1,
                        fontFamily: "mulishLight",
                        fontWeight: "700",
                        fontSize: 13,
                        color: "#fff",
                      }}
                    >
                      18 Years
                    </Text>

                    <Text
                      style={{
                        ...styles.Text1,
                        fontFamily: "mulishLight",
                        fontWeight: "700",
                        fontSize: 13,
                        color: "#fff",
                      }}
                    >
                      30 years
                    </Text>
                  </HStack>
                </VStack>

                <VStack mt="5%">
                  <Text
                    style={{
                      ...styles.Text1,
                      fontFamily: "mulishLight",
                      fontWeight: "bold",
                      fontSize: 13,
                      color: "#C0C0C0",
                    }}
                  >
                    Intrested In
                  </Text>
                  <HStack space="4%" mt="3%">
                    <RadioButton
                      value="first"
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Men
                      </Text>
                    </Center>

                    <RadioButton
                      value="second"
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checked === "second" ? "checked" : "unchecked"}
                      onPress={() => setChecked("second")}
                    />

                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Woman
                      </Text>
                    </Center>
                    <RadioButton
                      value="third"
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checked === "third" ? "checked" : "unchecked"}
                      onPress={() => setChecked("second")}
                    />

                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Others
                      </Text>
                    </Center>
                  </HStack>
                </VStack>

                <VStack mt="5%">
                  <Text
                    style={{
                      ...styles.Text1,
                      fontFamily: "mulishLight",
                      fontWeight: "bold",
                      fontSize: 13,
                      color: "#C0C0C0",
                    }}
                  >
                    Intrested
                  </Text>

                  <HStack justifyContent="space-between" mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Reading
                      </Text>
                    </Center>
                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Cricket
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Music
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Swimming
                      </Text>
                    </Center>
                  </HStack>
                  <HStack justifyContent="space-between" mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Cooking
                      </Text>
                    </Center>
                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Grammer
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Fitness
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Book
                      </Text>
                    </Center>
                  </HStack>

                  <HStack mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Photography
                      </Text>
                    </Center>
                  </HStack>
                </VStack>
                <VStack mt="5%">
                  <Text
                    style={{
                      ...styles.Text1,
                      fontFamily: "mulishLight",
                      fontWeight: "bold",
                      fontSize: 13,
                      color: "#C0C0C0",
                    }}
                  >
                    Sun Sign
                  </Text>

                  <HStack justifyContent="space-between" mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Aries
                      </Text>
                    </Center>
                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Pisces
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Aquaris
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Capricorn
                      </Text>
                    </Center>
                  </HStack>
                  <HStack justifyContent="space-between" mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Cancer
                      </Text>
                    </Center>
                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Gemini
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Virgo
                      </Text>
                    </Center>

                    <Checkbox color="#FF576F" uncheckedColor="#fff" />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Libra
                      </Text>
                    </Center>
                  </HStack>

                  <HStack mt="3%">
                    <Checkbox
                      color="#FF576F"
                      uncheckedColor="#fff"
                      status={checkeds ? "checked" : "unchecked"}
                      onPress={() => {
                        setCheckeds(!checkeds);
                      }}
                    />
                    <Center>
                      <Text
                        style={{
                          ...styles.Text1,
                          fontFamily: "mulishLight",
                          fontWeight: "700",
                          fontSize: 13,
                          color: "#fff",
                        }}
                      >
                        Leo
                      </Text>
                    </Center>
                  </HStack>
                </VStack>

                <TouchableOpacity
                  style={{
                    ...styles.Button,
                    marginTop: "10%",
                    width: width * 0.8,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  activeOpacity={1}
                  onPress={() => navigation.navigate("Dashboard")}
                >
                  <VStack mx="auto" my="auto">
                    <Text
                      style={{
                        ...styles.Text,
                        fontFamily: "mulishLight",
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Search
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </VStack>
            </VStack>
          </ScrollView>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
  );
};

export default Intrest;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Text: {
    fontSize: 32,
    color: "#ffff",
  },
  Text1: {
    fontSize: 18,
    color: "#ffff",
  },
  Button: {
    height: height * 0.06,
    backgroundColor: "#FF576F",
    borderRadius: 22,
  },
  slidemodel: {
    justifyContent: "flex-end",
    margin: 0,

    width: width,
    height: height,
  },
});
