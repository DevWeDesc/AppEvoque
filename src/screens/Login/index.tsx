import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface LoginProps {
  navigation: StackNavigationProp<any>;
}

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Senha: ${password}`);
    navigation.navigate('Home');
  };

  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image
        source={require('../../assets/images/evoque.png')}
        style={styles.image}
      />
      <View>      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        placeholderTextColor={'#fff'}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={'#fff'}
      />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 40,
    color: '#fff',
    letterSpacing: 3,
  },
  input: {
    color: '#fff',
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    marginBottom: 20,
    paddingLeft: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 200,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FF6900',
    marginTop: 10,
    borderRadius: 100, 
  },
  textButton:{
    color: '#fff',
    fontWeight: 'bold',
  }
});