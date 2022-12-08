import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { styles } from './StopwatchStyles';

const Stopwatch = () => {
  const [timer, setTimer] = useState('00 : 00 : 000')
  let [milliseconds,seconds,minutes] = [0,0,0,];
  const [int, setInt] = useState<any>()
  // Button Functions
  const handleStart = () => {
    alert('Timer Starter')
  }
  const handleLap = () => {
    alert('Time Lapped')
  }
  const handlePause = () => {
    alert('Timer Paused')
  }
  const handleReset = () => {
    alert('Timer reset')
  }

  return (
    <View style={styles.container}>
        <View style={styles.timerDisplay}>
          <Text style={styles.timer}>{timer}</Text>
            <View style={styles.buttons}> 
                <Pressable onPress={handleStart} style={styles.startButton}>
                  <Text>Start</Text>
                </Pressable>
                <Pressable onPress={handleLap} style={styles.lapButton}>
                  <Text>Lap</Text>
                </Pressable>
                <Pressable onPress = {handlePause} style={styles.pauseButton}>
                  <Text>Pause</Text>
                </Pressable>
                <Pressable onPress = {handleReset} style={styles.resetButton}>
                  <Text>Reset</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}



  

export default Stopwatch