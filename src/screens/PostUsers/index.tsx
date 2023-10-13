import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView, Platform } from "react-native";
import { PostData } from "../../../assets/data/data";
import { AppContext } from "../../context/context";

export const PostUsers = ({ navigation }: any) => {
  const { setLoadingPosts } = useContext(AppContext);

  const newPost = () => {
    const PhotoPost = require("../../assets/images/NewPhotoPost.png");
    const PhotoUser = require("../../assets/images/rodrigo.jpg");
    PostData.unshift({
      id: 3,
      photoUser: PhotoUser,
      name: "Rodrigo Hasi",
      description:
        "Estamos empolgados em anunciar a chegada da Academia Evoque à sua comunidade! Com um compromisso inabalável com a saúde, bem-estar e fitness!",
      patrocined: true,
      photoPost: PhotoPost,
    });
    alert("Postagem realizada com sucesso!");
    setLoadingPosts(true);
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
      <View style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }} />

      <ScrollView
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
            numberOfLines={3}
            multiline={true}
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              backgroundColor: "#424242",
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderRadius: 8,
              color: "white",
              minHeight: 36,
            }}
            placeholder="Insira sua Descrição..."
          />
          <View
            style={{
              minHeight: 309,
              borderRadius: 8,
              backgroundColor: "#424242",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 60, height: 60, objectFit: "contain" }}
              source={require("../../assets/images/plus.png")}
            />
            <Text style={{ color: "#FFF" }}>
              Adicione uma foto para sua Postagem!!
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.65}
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 20,
              borderRadius: 8,
              marginBottom: 20,
            }}
            onPress={() => {
              newPost();
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Publicar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
