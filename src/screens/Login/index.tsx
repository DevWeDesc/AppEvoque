import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

export interface LoginProps {
  navigation: StackNavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Email: ${email}, Senha: ${password}`);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/evoque.png")}
        style={styles.image}
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={"#fff"}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.loginOther}>
          <View style={styles.viewOu}></View>
          <Text style={styles.textLogout}>OU</Text>
          <View style={styles.viewOu}></View>
        </View>
        <Text style={styles.textLogout}>
          Não tem mais conta?{" "}
          <Text style={styles.textLogoutCad}>Cadastre-se</Text>
        </Text>
      </View>
      <StatusBar style="light" translucent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginOther: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  viewOu: { height: 1, backgroundColor: "white", width: "33%", marginTop: 15 },
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
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
    marginTop: 10,
    borderRadius: 8,
  },
  textButton: {
    color: "#000",
    fontWeight: "bold",
  },
  textLogout: {
    textAlign: "center",
    marginTop: 15,
    color: "white",
  },
  textLogoutCad: {
    fontWeight: "bold",
  },
});
