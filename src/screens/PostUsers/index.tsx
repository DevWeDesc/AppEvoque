import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

export const PostUsers = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <Image source={require("../../assets/images/imageUserPost.png")} />
          <View>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
              Rodrigo Hasi
            </Text>
            <Text style={{ color: "#FFF" }}>Patrocinado</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginTop: 27,
          }}
        >
          <Image source={require("../../assets/images/Switch.png")} />
          <View>
            <Text style={{ color: "#FFF" }}>Tornar publicação Pública</Text>
          </View>
        </View>
        <View style={{ gap: 19, marginTop: 16 }}>
          <TextInput
            placeholderTextColor="white"
            numberOfLines={10}
            multiline={true}
            style={{
              justifyContent: "flex-start",
              backgroundColor: "#424242",
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 8,
              color: "white",
              minHeight: 86,
            }}
            placeholder="Insira sua Descrição..."
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
