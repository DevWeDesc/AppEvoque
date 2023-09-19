import { View, Text, ImageBackground, StyleSheet } from "react-native";
const image = {uri: 'https://cdn.pixabay.com/photo/2017/01/09/14/43/dumbbell-1966704_1280.jpg'};
const image1 = {uri: 'https://images.pexels.com/photos/6922169/pexels-photo-6922169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
const image2 = { uri: 'https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
const image3 = {uri: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }

export default function Treinos() {
  return (
    <ImageBackground source={require('../../assets/images/bg2.jpg')}  style={styles.background}>
    <ImageBackground  source={image} borderRadius={10} style={styles.container}>
      <View style={styles.textContainer}>
        <View  style={styles.userinfo}>
          <Text style={styles.text1}>Repetições: </Text>
          <Text style={styles.text}>ABC 2x</Text>
        </View>
        <View  style={styles.userinfo}>
          <Text style={styles.text1}>Duração: </Text>
          <Text style={styles.text}>17 jul 23 - 24 dez 23</Text>
        </View>
        <View style={styles.userinfo}>
          <Text style={styles.text1}>Objetivo: </Text>
          <Text style={styles.text}>Redução de Gordura / Hipertrofia </Text>
        </View>
        <View style={styles.userinfo}>
          <Text style={styles.text1}>Nível: </Text>
          <Text style={styles.text}>Iniciante</Text>
        </View>
      </View>
    </ImageBackground>

    <View style={styles.subcontainer}>
      <ImageBackground  source={image1} borderRadius={10} style={styles.imagemCard}>
      <View style={styles.card}>
        <Text style={styles.treinoTitulo}>Treino A</Text>
        <Text style={styles.treinoDesc}>Peito, tríceps e ombros</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.treinoStatus}>Status: </Text>
          <Text style={styles.treinoStatus}>Concluído</Text>
        </View>
      </View>
      </ImageBackground>
    </View>

    <View style={styles.subcontainer}>
      <ImageBackground  source={image2} borderRadius={10}  style={styles.imagemCard}>
      <View style={styles.card}>
        <Text style={styles.treinoTitulo}>Treino B</Text>
        <Text style={styles.treinoDesc}>Costas e bícips</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.treinoStatus}>Status: </Text>
          <Text style={styles.treinoStatus}>Concluído</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
    <View style={styles.subcontainer}>
      <ImageBackground  source={image3} borderRadius={10} style={styles.imagemCard}>
      <View style={styles.card}>
        <Text style={styles.treinoTitulo}>Treino C</Text>
        <Text style={styles.treinoDesc}>Posterior e panturrilha</Text>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text style={styles.treinoStatus}>Status: </Text>
          <Text style={styles.treinoStatus}>Não iniciado</Text>
        </View>
      </View>
      </ImageBackground>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 9,
    borderColor: '#FF6900',
    borderWidth: 0.5,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 20,
    gap: 10,    
  },

  userinfo:{
    flexDirection: 'row',
    margin: 10,
    gap: 5,
  },

  text1:{
    color: '#FF6900',
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },

  subcontainer:{
    flex: 1,
    backgroundColor: '#FF6900',
    margin: 20,
    borderRadius: 10,
    borderColor: '#FF6900',
    borderWidth: 0.5,
  },
  treinoTitulo:{
    color: '#FF6900',
    fontSize: 20,
    fontWeight: 'bold',
  },
  treinoDesc:{
    color: '#fff',
    fontSize: 18,

  },
  treinoStatus:{
    color: '#fff',
    fontSize: 18,
  },
  imagemCard:{
    height: '99.5%',
  },
  card:{
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 20,
    gap: 10,

  }
});
