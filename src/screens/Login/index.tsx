import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { position } from "native-base/lib/typescript/theme/styled-system";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export interface LoginProps {
  navigation: StackNavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { reset } = useNavigation();

  const handleLogin = () => {
    //console.log(`Email: ${email}, Senha: ${password}`);
    navigation.navigate("HomeScreen");
    // reset({
    //   index: 0,
    //   routes: [{ name: "Sessão de Treinos" }],
    // });
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ position: "absolute", opacity: 0.7 }}
        source={require("../../assets/images/ImgEvoque.png")}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/evoque.png")}
          style={styles.image}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="exemplo@gmail.com"
            onChangeText={setEmail}
            value={email}
            placeholderTextColor={"#fff"}
          />
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
            placeholderTextColor={"#fff"}
          />
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.loginOther}>
            <View style={styles.viewOu}></View>
            <Text style={styles.textOU}>OU</Text>
            <View style={styles.viewOu}></View>
          </View>
          <View style={styles.register}>
            <Text style={styles.textLogout}>Não tem mais conta?</Text>
            <TouchableOpacity activeOpacity={0.65} onPress={handleRegister}>
              <Text style={styles.textLogoutCad}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="light" translucent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
  },
  loginOther: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  viewOu: { height: 1, backgroundColor: "white", width: "33%", marginTop: 15 },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 32,
    marginBottom: 40,
    color: "#fff",
    letterSpacing: 3,
  },
  input: {
    backgroundColor: "#424242",
    color: "#fff",
    width: 300,
    height: 50,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#FFF",
    marginVertical: 5,
    borderRadius: 8,
  },
  textButton: {
    color: "#000",
    fontWeight: "bold",
  },
  textOU: {
    marginTop: 12,
    textAlign: "center",
    color: "white",
  },
  textLogout: {
    textAlign: "center",
    color: "white",
  },
  register: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textLogoutCad: {
    marginVertical: 0,
    marginLeft: 5,
    color: "#FFF",
    fontWeight: "bold",
  },
});
