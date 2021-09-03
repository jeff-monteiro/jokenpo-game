import React from 'react';
import { Alert, Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';

function App(props) {
  function handleButton(button){
    const jogadas = ['Pedra','Papel','Tesoura']
    const indice = Math.floor(Math.random() * jogadas.length)
    const comp = jogadas[indice]
    let resultado = ''
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
      
      </View>
      <View style={styles.console}>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel:{

  }
})
export default App()
