import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function Perfil() {
  const [userInfo, setUserInfo] = useState({
    token: 'ABC123',
    name: 'Rodrigo',
    email: 'rodrigo@evoke.com.br',
    contato: '(11) 99999-9999',
    genero: 'Masculino',
    password: '123456'
  });
  return (
    <View>
      <ImageBackground source={require('../../assets/images/bg2.jpg')} style={styles.containerHeader}>

      <View>
        <View style={{ flexDirection: 'row', gap:5, justifyContent: 'center' }}>
        <Text style={styles.title}>
          TOKEN:
        </Text>
        <Text style={styles.token}>
        {userInfo.token}
        </Text>
        </View>
        <Image
          source={require('../../assets/images/rodrigo.jpg')}
          style={styles.imagemPerfil}
          />
        <TouchableOpacity style={styles.iconPhoto}>
          <MaterialIcons name="photo-camera" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
          </ImageBackground>
      <View style={styles.form}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={userInfo.name}
          placeholderTextColor={'#000'}
        />
         <Text style={styles.textInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={userInfo.email}
          placeholderTextColor={'#000'}
          />
         <Text style={styles.textInput}>Contato </Text>
        <TextInput
          style={styles.input}
          placeholder="Contato"
          value={userInfo.contato}
          placeholderTextColor={'#000'}
          />
         <Text style={styles.textInput}>Gênero</Text>
        <TextInput
          style={styles.input}
          placeholder="Gênero"
          value={userInfo.genero}
          placeholderTextColor={'#000'}
          />
         <Text style={styles.textInput}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={userInfo.password}
          placeholderTextColor={'#000'}
          />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader:{
    width: '100%',
    height: 300,
    backgroundColor: '#2A2C33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  imagemPerfil:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 50,
    borderColor: '#FF6900',
    borderWidth: 1,
    alignContent: 'center',
    alignSelf: 'center',
  },
  title:{
    color: '#FF6900',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',

  },
  token:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',

  },
  iconPhoto:{
    backgroundColor: '#FF6900',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    left: 140,
  },
  form:{
    paddingRight: 30,
    paddingLeft: 30, 
    paddingBottom: 30,
    paddingTop: 30,


  },
  textInput:{
    color: '#rgba(42, 44, 51, 0.6)',
    fontWeight: 'bold',
    fontSize: 18,

  },
  input:{
    width: '100%',
    height: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 16,
    alignSelf: 'center',
    borderBottomColor: '#rgba(255, 105, 0, 0.3)',
    borderBottomWidth: 2,
    fontWeight: 'bold',

  }
  
});
