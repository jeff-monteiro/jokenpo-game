import React from 'react';
import { Alert, Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';

import papel from 'src./img/papel.png'
import pedra from 'src./img/pedra.png'
import tesoura from 'src./img/tesoura.png'

const {height} = Dimension.get('window')
const imgHeader = {url: 'https://images.app.goo.gl/XpEi6tPArQA7H9RWA.png'}

function App(props) {
  function handleButton(button){
    const jogadas = ['Pedra','Papel','Tesoura']
    const indice = Math.floor(Math.random() * jogadas.length)
    const comp = jogadas[indice]
    let resultado = ''

    Alert.alert = {'Atenção!', `A sua jogada foi ${button} e a do computador foi ${comp} e o resultado foi ${resultado}`}
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Image source={imgHeader} />
      </View>
      <View style={styles.console}>
        <Pressable>

        </Pressable>
        <Pressable>

        </Pressable>
        <Pressable>
          
        </Pressable>
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
  console:{

  }
})
export default App()
