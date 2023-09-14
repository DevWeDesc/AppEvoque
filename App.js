import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

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
      <Text style={styles.title}>Login</Text>
      <Image
        source={require('./assets/evoke.png')}
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
      <View>
        <Text style={styles.paragraph}>Esqueci minha senha</Text>
        <View style={styles.section}>
          <Text style={styles.paragraph}>Lembrar de mim ?</Text>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#FF6800' : undefined}
          />
        </View>
      </View>
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
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 30,
  },
  paragraph: {
    color: '#fff',
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default Login;