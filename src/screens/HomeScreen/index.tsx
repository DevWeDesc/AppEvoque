import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity  } from "react-native";
import { FontAwesome5, FontAwesome, Feather, Foundation, Ionicons  } from '@expo/vector-icons';
import { useFonts, Kanit_400Regular, Kanit_700Bold, Kanit_600SemiBold } from '@expo-google-fonts/kanit';
import { LoginProps } from "../Login";

export default function HomeScreen({ navigation }: LoginProps) {

  let [fontsLoaded, fontError] = useFonts({
    Kanit_400Regular, Kanit_700Bold, Kanit_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/bg2.jpg')} style={styles.containerHeader}>
        <View style={styles.titleHeader}>
          <Image
            source={require('../../assets/images/evoque.png')}
            style={styles.imagemHeader}
          />
          <Text style={styles.title}>Evoque</Text>
        </View>
        <Image
          source={require('../../assets/images/rodrigo.jpg')}
          style={styles.imagemPerfil}
        />
        <Text style={styles.textUser}> Bem vindo, Rodrigo!</Text>
      </ImageBackground>
      <View style={styles.containerCard}>

        
        <TouchableOpacity style={styles.card} onPress={ () => navigation.navigate('Treinos') }>
          <View style={styles.cardIcon}>
            <FontAwesome5 name="dumbbell" color="#FF6900" size={25} />
          </View>
          <Text style={styles.cardText}>Treinos</Text>
        </TouchableOpacity>

        <View style={styles.card}>
        <View style={styles.cardIcon}>
            <Foundation name="clipboard-pencil" size={24} color="#FF6900" />
          </View>
          <Text style={styles.cardText}>Treino Extra</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Feather name="user-check" size={24} color="#FF6900" />
          </View>
            <Text style={styles.cardText}>Avaliação</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons name="md-trending-up-sharp" size={24} color="#FF6900" />
          </View>
          <Text style={styles.cardText}>Meu Progresso</Text>
        </View>

        <TouchableOpacity style={styles.card} onPress={ () => navigation.navigate('Person') }>
          <View style={styles.cardIcon}>
          <Ionicons name="person" size={24} color="#FF6900" />
          </View>
          <Text style={styles.cardText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={ () => navigation.navigate('Invoices')}>
          <View style={styles.cardIcon}>
            <FontAwesome name="dollar" color="#FF6900" size={25} />
          </View>
          <Text style={styles.cardText}>Faturas</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    backgroundColor: '#000',
    color: '#fff',
  },

  containerHeader:{
    padding: 30,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },

  titleHeader:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    gap: 10,
  },

  title:{
    color: '#fff',
    fontSize: 32, 
    fontFamily: 'Kanit_600SemiBold',
  },

  imagemHeader:{
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  imagemPerfil:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 50,
    borderColor: '#FF6900',
    borderWidth: 1,
  },

  textUser:{
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Kanit_400Regular',
  },

  containerCard:{
    flex: 1,
    height: 300,
    width: 350,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 20,
  },

  card:{
    backgroundColor: '#FF6900',
    width: 160,
    height: 90,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    itemsAlign: 'center',
    gap: 10,
    padding: 10,
  
  },

  cardIcon:{
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },

  cardText:{
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }

});