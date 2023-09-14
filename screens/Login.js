import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  const [loaded] = useFonts({
    Kanit: require('./assets/fonts/Kanit-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    
    <View style={styles.container}>
      <Image
        source={require('./assets/evoke.png')}
        style={styles.image}
      />
      <View>

      
      <Text style={styles.title}>Login</Text>
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
      <Button 
        color={'#FF6800'} 
        backgroundColor={'#FF6800'}
        title="Entrar" 
        onPress={handleLogin}
         
      />
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
    fontFamily: 'Kanit',
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
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 200,
  },
});

export default Login;