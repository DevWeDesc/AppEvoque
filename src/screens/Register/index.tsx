import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  StyleSheet,
} from "react-native";

export const Register = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Login");
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
          placeholder="Seu Nome"
          onChangeText={setName}
          value={name}
          placeholderTextColor={"#fff"}
        />
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <Text style={styles.textLogout}>Já possui uma conta?</Text>
          <TouchableOpacity activeOpacity={0.65}>
            <Text style={styles.textLogoutCad} onPress={handleLogin}>
              Faça o Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar translucent />
    </SafeAreaView>
  );
};

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
    marginVertical: 5,
    borderRadius: 8,
  },
  register: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#000",
    fontWeight: "bold",
  },
  textLogout: {
    textAlign: "center",
    color: "white",
  },
  textLogoutCad: {
    marginLeft: 5,
    color: "#FFF",
    fontWeight: "bold",
  },
});
