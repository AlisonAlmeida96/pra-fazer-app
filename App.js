import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.boxLogo}>
        <Image style={styles.logo} source={require('./assets/logo-pra-fazer.png')}></Image>
      </View>

      <View>
        <TextInput style={styles.input} placeholder='E-mail'></TextInput>
      </View>

      <View>
        <TextInput style={styles.input} placeholder='Senha'></TextInput>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.btnCadastrar}>Criar Usuário</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F60',
  },

  boxLogo: {
    backgroundColor: '#F60',
    marginBottom: 40,
    paddingTop: 300,
    alignItems: 'center',
  },

  logo: {
      width: 300,
      height:50,
  },

  input: {
    fontSize: 28,
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight:20
  },

  btn: {
    backgroundColor: '#070A52',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight:20
  },

  btnText: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
  },

  btnCadastrar: {
    textAlign: 'center',
    color: '#FFF',
  },
});