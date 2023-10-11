import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  useFonts,
  Kanit_400Regular,
  Kanit_700Bold,
  Kanit_600SemiBold,
} from "@expo-google-fonts/kanit";
import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import IconEvil from "react-native-vector-icons/EvilIcons";
import IconIon from "react-native-vector-icons/Ionicons";
import { PostData } from "../../../data/data";
import { IPost } from "../../../types/types";

export function HomeScreen({ navigation }: any) {
  const [like, setLike] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleLike = () => {
    like ? setLike(false) : setLike(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require("../../assets/images/LogoEvoque.png")}
          style={styles.logoHeader}
        />
        <Image source={require("../../assets/images/message-circle.png")} />
      </View>
      <ScrollView>
        {PostData.map((post: IPost) => (
          <View style={styles.containerAllPosts}>
            <View style={styles.containerPost}>
              <View style={styles.userPost}>
                <View style={styles.containerUser}>
                  <View style={styles.photoUser}>
                    <Image
                      source={post.photoUser}
                      style={{ maxWidth: 50, maxHeight: 50, borderRadius: 40 }}
                    />
                  </View>
                  <View style={styles.userInformations}>
                    <Text style={styles.nameUser}>{post.name}</Text>
                    <Text style={styles.titleUser}>
                      {post.patrocined ? "Patrocinado" : null}
                    </Text>
                  </View>
                </View>
                <Image style={styles.imagePost} source={post.photoPost} />
                <View style={styles.containerUser}>
                  <TouchableOpacity onPress={handleLike}>
                    {like ? (
                      <Icon name="hearto" size={25} color="#FFF" />
                    ) : (
                      <Icon name="heart" size={25} color="#FFF" />
                    )}
                  </TouchableOpacity>
                  <IconEvil name="comment" size={37} color="#FFF" />
                  <IconIon name="arrow-undo-outline" size={27} color="#FFF" />
                </View>
                <View style={styles.containerUser}>
                  <Text style={styles.titleUser}>
                    <Text style={styles.nameUser}>{post.name} </Text>
                    <Text style={styles.titleUser}>{post.description}</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  containerHeader: {
    backgroundColor: "#1E1E1E",
    borderBottom: 1,
    borderColor: "#535353",
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
  logoHeader: {
    width: 126,
    height: 57,
  },
  containerAllPosts: {
    gap: 10,
    marginBottom: 40,
  },
  containerPost: {
    flexDirection: "row",
    marginTop: 30,
    gap: 20,
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    gap: 10,
  },
  userPost: {
    gap: 10,
    paddingHorizontal: 0,
    alignItems: "flex-start",
    width: "100%",
  },
  userInformations: {
    flexDirection: "column",
    gap: 9,
  },
  nameUser: {
    color: "#FFF",
    fontWeight: "bold",
  },
  titleUser: {
    color: "#FFF",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  photoUser: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePost: {
    width: "100%",
  },
});
