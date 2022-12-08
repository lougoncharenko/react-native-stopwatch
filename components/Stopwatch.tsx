import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stopwatch = () => {
  const [timer, setTimer] = useState('00 : 00 : 000')
  return (
    <View style={styles.container}>
        <View style={styles.timerDisplay}>
          <Text style={styles.timer}>{timer}</Text>
            <View style={styles.buttons}> 
                <Pressable style={styles.startButton}>
                  <Text>Start</Text>
                </Pressable>
                <Pressable style={styles.lapButton}>
                  <Text>Lap</Text>
                </Pressable>
                <Pressable style={styles.pauseButton}>
                  <Text>Pause</Text>
                </Pressable>
                <Pressable style={styles.resetButton}>
                  <Text>Reset</Text>
                </Pressable>
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
        width: '90%',
        position: 'absolute',
        padding: 50,
        borderRadius: 100,
      },
      timerDisplay: {
        position: 'relative',
        width: '92%',
        backgroundColor: '#ffffff',
      },
      timer: {
        textAlign: 'center',
        color: 'red',
        fontSize: 25
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      startButton: {
        backgroundColor: 'rgb(90, 221, 90)',
        margin: 15,
        padding: 5,
       
      },
      lapButton: {
        backgroundColor: 'yellow',
        padding: 5,
        margin: 15,
      },
      pauseButton: {
        backgroundColor: 'pink',
        padding: 5,
        margin: 15,
      },
      resetButton: {
        backgroundColor: '#e64b67',
        padding: 5,
        margin: 15,
      }

    })

  

export default Stopwatch