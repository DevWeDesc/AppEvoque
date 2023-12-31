import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Animated from "react-native-reanimated";

export const SplashInit = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SplashScreen");
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
      <StatusBar translucent />
    </SafeAreaView>
  );
};
