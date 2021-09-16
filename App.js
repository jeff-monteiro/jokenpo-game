import React from 'react'
import { Alert, Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'

import pedra from './src/img/pedra.jpg'
import papel from './src/img/papel.jpg'
import tesoura from './src/img/tesoura.jpg'

const { height } = Dimensions.get('window')

const imgHeader = {url: 'https://mega.ibxk.com.br/2014/05/12/12142817719455.png', width: 300, height: 300}

function App(props) {
  function handleButton(button){
    const jogadas = ['pedra','papel','tesoura']
    const indice = Math.floor(Math.random() * jogadas.length)
    const comp = jogadas[indice]
    let resultado = ''

    if (button === comp) resultado = 'Vocês Empataram!'
		else if (
			(button === 'pedra' && comp !== 'papel') ||
			(button === 'papel' && comp !== 'tesoura') ||
			(button === 'tesoura' && comp !== 'pedra')
		)
			resultado = 'Você venceu!'
		else resultado = 'O App venceu!'

    Alert.alert('Atenção!', `A sua jogada foi ${button} e a do computador foi ${comp}! ${resultado}`)
  }
  
  return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Image source={imgHeader} />
        </View>
        <View style={styles.console}>
          <MyButton onPress = {handleButton.bind(this,'pedra')} source = {pedra}/>
          <MyButton onPress = {handleButton.bind(this,'pedra')} source = {papel}/>
          <MyButton onPress = {handleButton.bind(this,'pedra')} source = {tesoura}/>
        </View>
      </View>
    )
  }
  function MyButton({onPress, source, ... props}) { //Efetuando destructuring
    return(
      <Pressable onPress = {onPress}>
        <Image style = {styles.img} source = {source}/>
      </Pressable>
    )
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ff78',
		height: height,
		alignItems: 'center',
		justifyContent: 'space-evenly',
  },
  img:{
    height: 100,
		width: 60,
		margin: 28,
    borderRadius: 8,
  },
  console:{
    flexDirection: 'row',
  },
  panel: {
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
  },
})
export default App