import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function Treinos() {
  return (
    <ImageBackground source={require('../../assets/images/bg2.jpg')} style={styles.background}>
    <View style={styles.container}>
      <Text >Training</Text>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: '#2A2C33',
    alignItems: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    margin: 100,
  }
});
