import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import {
  useFonts,
  Kanit_400Regular,
  Kanit_700Bold,
  Kanit_600SemiBold,
} from "@expo-google-fonts/kanit";
import { LoginProps } from "../Login";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import postImage from "../../assets/images/postred.png";
import Icon from "react-native-vector-icons/AntDesign";
import IconEvil from "react-native-vector-icons/EvilIcons";
import IconIon from "react-native-vector-icons/Ionicons";

export default function HomeScreen({ navigation }: LoginProps) {
  let [fontsLoaded, fontError] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <View style={styles.containerHeader}>
          <Image
            source={require("../../assets/images/LogoEvoque.png")}
            style={styles.logoHeader}
          />
          <Image source={require("../../assets/images/message-circle.png")} />
        </View>
        <ScrollView>
          <View style={styles.containerAllPosts}>
            <View style={styles.containerPost}>
              <View style={styles.userPost}>
                <View style={styles.containerUser}>
                  <View style={styles.photoUser}>
                    <Image source={require("../../assets/images/Logo.png")} />
                  </View>
                  <View style={styles.userInformations}>
                    <Text style={styles.nameUser}>Udemy</Text>
                    <Text style={styles.titleUser}>Patrocinado</Text>
                  </View>
                </View>
                <Image style={styles.imagePost} source={postImage} />
                <View style={styles.containerUser}>
                  <Icon name="hearto" size={25} color="#FFF" />
                  <IconEvil name="comment" size={37} color="#FFF" />
                  <IconIon name="arrow-undo-outline" size={27} color="#FFF" />
                </View>
                <View style={styles.containerUser}>
                  <Text style={styles.nameUser}>Udemy</Text>
                  <Text style={styles.titleUser}>
                    Cursos a partir de R$ 29,99!!
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.containerPost}>
              <View style={styles.userPost}>
                <View style={styles.containerUser}>
                  <View style={styles.photoUser}>
                    <Image source={require("../../assets/images/Logo.png")} />
                  </View>
                  <View style={styles.userInformations}>
                    <Text style={styles.nameUser}>Udemy</Text>
                    <Text style={styles.titleUser}>Patrocinado</Text>
                  </View>
                </View>
                <Image style={styles.imagePost} source={postImage} />
                <View style={styles.containerUser}>
                  <Icon name="hearto" size={25} color="#FFF" />
                  <IconEvil name="comment" size={37} color="#FFF" />
                  <IconIon name="arrow-undo-outline" size={27} color="#FFF" />
                </View>
                <View style={styles.containerUser}>
                  <Text style={styles.nameUser}>Udemy</Text>
                  <Text style={styles.titleUser}>
                    Cursos a partir de R$ 29,99!!
                  </Text>
                </View>
                <View style={styles.containerUser}>
                  <Text style={styles.nameUser}>Udemy</Text>
                  <Text style={styles.titleUser}>
                    Cursos a partir de R$ 29,99!!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    color: "#fff",
  },
  containerHeader: {
    backgroundColor: "#1E1E1E",
    borderBottom: 1,
    borderColor: "#535353",
    paddingVertical: 13.5,
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
    width: "130%",
  },
});
