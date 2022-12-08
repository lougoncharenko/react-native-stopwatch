import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './StopwatchStyles';

const Stopwatch = () => {
  const [timer, setTimer] = useState('00 : 00 : 000')
  let [milliseconds,seconds,minutes] = [0,0,0,];
  const [int, setInt] = useState<any>()

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



  

export default Stopwatch