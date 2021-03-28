import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return(
    <View styLe={styles.container}>

      <Text styLe={styles.title}>Calcule seu IMC</Text>

      <TextInput
      styLe={styles.input} 
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder= 'Peso (kg)'
      keyboardType='numeric'
      
      />

      <TextInput
      styLe={styles.input} 
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder= 'Altura (cm)'
      keyboardType='numeric'

      />

    </View>

  );
}

const styles = StyleSheet.create({
  
  container:{
    flex:1,
  },

  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize:30
  },

  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin:15,
    padding: 10,
    color:'#FFF',
    fontSize:24,
  },

});
