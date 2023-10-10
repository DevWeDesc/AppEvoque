import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Animated from "react-native-reanimated";

export const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1E1E1E",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.Image
        sharedTransitionTag="tag"
        style={{ width: 200, height: 200 }}
        source={require("../../assets/images/evoque.png")}
      />
      <StatusBar translucent />
    </SafeAreaView>
  );
};
