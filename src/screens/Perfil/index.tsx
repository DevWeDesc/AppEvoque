import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Perfil({ navigation }: any) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const [userInfo, setUserInfo] = useState({
    token: "ABC123",
    office: "TITULAR SEO",
    name: "Rodrigo Hasi",
    email: "rodrigo@evoke.com.br",
    contato: "(11) 99999-9999",
    genero: "Masculino",
    password: "123456",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
      <View style={{ paddingTop: Platform.OS === "android" ? 40 : 0 }} />

      <ScrollView style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 38,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
              maxWidth: 400,
            }}
          >
            <Image
              source={require("../../assets/images/rodrigo.jpg")}
              style={styles.imagemPerfil}
            />
            <TouchableOpacity activeOpacity={0.65} style={styles.iconPhoto}>
              <MaterialIcons name="photo-camera" size={24} color="#1E1E1E" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRadius: 20,
              backgroundColor: "#000",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {userInfo.office}
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 18 }}>
            {userInfo.name}
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/user.png")} />
              <Text style={{ color: "#FFF" }}>Minha Conta</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/Question.png")} />
              <Text style={{ color: "#FFF" }}>Dúvidas Frequentes</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/contact.png")} />
              <Text style={{ color: "#FFF" }}>Fale Conosco</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/file-text.png")} />
              <Text style={{ color: "#FFF" }}>Termos de Uso</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/info.png")} />
              <Text style={{ color: "#FFF" }}>Aviso de Privacidade</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleLogin}
          style={{ padding: 20, marginTop: 17 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
              <Image source={require("../../assets/images/log-out.png")} />
              <Text style={{ color: "#FFF" }}>Sair</Text>
            </View>
            <Image source={require("../../assets/images/arrowRight.png")} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
  },
  imagemPerfil: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 20,
    borderWidth: 1,
    alignContent: "center",
    alignSelf: "center",
  },
  iconPhoto: {
    backgroundColor: "#a3a3a3",
    color: "#000",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 120,
  },
});
