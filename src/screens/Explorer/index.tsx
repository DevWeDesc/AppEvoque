import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export const Explorer = () => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "#1E1E1E",
        flex: 1,
        flexDirection: "row",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Explorar</Text>
    </SafeAreaView>
  );
};
