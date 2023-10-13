import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView, Platform } from "react-native";
import { PostData } from "../../../assets/data/data";
import { AppContext } from "../../context/context";
import * as ImagePicker from "expo-image-picker";

const imagepost = require("../../assets/images/NewPhotoPost.png");

export const PostUsers = ({ navigation }: any) => {
  const { setLoadingPosts } = useContext(AppContext);
  const [idPublication, setIdPublication] = useState(0);
  const [publicPublication, setPublicPublication] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [descriptionPost, setDescriptionPost] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageSelected(result.assets[0].uri);
      console.log(imageSelected);
    }
  };

  const handlePublicPublication = () => {
    publicPublication
      ? setPublicPublication(false)
      : setPublicPublication(true);
  };

  const newPost = () => {
    const PhotoUser = require("../../assets/images/rodrigo.jpg");
    PostData.unshift({
      id: idPublication,
      photoUser: PhotoUser,
      name: "Rodrigo Hasi",
      description: descriptionPost,
      patrocined: true,
      photoPost: imagepost,
      //photoPost: imageSelected,
    });
    alert("Postagem realizada com Sucesso!");
    setLoadingPosts(true);
    setDescriptionPost("");
    setImageSelected("");
    setIdPublication(0);
    navigation.navigate("HomeScreen");
  };

  const getRandomArbitrary = () => {
    setIdPublication(Math.random() * (2 - 1000) + 2);
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
          <Switch
            value={publicPublication}
            onValueChange={handlePublicPublication}
            thumbColor={"#FFF"}
          />
          <View>
            <Text style={{ color: "#FFF" }}>Tornar publicação Pública</Text>
          </View>
        </View>
        <View style={{ gap: 19, marginTop: 16 }}>
          <TextInput
            value={descriptionPost}
            onChangeText={(newText) => setDescriptionPost(newText)}
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
          {!imageSelected ? (
            <TouchableOpacity onPress={pickImage}>
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
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={{ uri: imageSelected }}
                style={{ width: "100%", minHeight: 309, borderRadius: 8 }}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            activeOpacity={0.65}
            style={{
              backgroundColor: "#FFF",
              paddingVertical: 20,
              borderRadius: 8,
              marginBottom: 20,
            }}
            onPress={() => {
              getRandomArbitrary();
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
