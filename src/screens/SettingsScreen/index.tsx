import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Link style={styles.button} to="/Login">
          <Text style={{ color: '#000' }}>Sair</Text>
      </Link>
    </View>
  );
  
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,

  }
});