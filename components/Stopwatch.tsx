import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stopwatch = () => {
  const [timer, setTimer] = useState('00 : 00 : 00 : 000')
  return (
    <View style={styles.container}>
        <View style={styles.timerDisplay}>
            <View style={styles.buttons}> 
                <Pressable style={styles.startButton}></Pressable>
                <Pressable style={styles.lapButton}></Pressable>
                <Pressable style={styles.pauseButton}></Pressable>
                <Pressable style={styles.resetButton}></Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
      container: {
        backgroundColor: '#ffffff',
        borderWidth: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '40%',
        minWidth: '500',
        position: 'absolute',
        padding: 50,
        borderRadius: 100,
      },
      timerDisplay: {
        position: 'relative',
        width: '92%',
        backgroundColor: '#ffffff',
        color: '#f30808',

      }
      

    })

  

export default Stopwatch