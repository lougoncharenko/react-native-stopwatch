import React, {useState} from 'react'
import { Pressable, Text, View } from 'react-native';
import { styles } from './StopwatchStyles';

const Stopwatch = () => {
  const [timer, setTimer] = useState('00 : 00 : 000')
  let [milliseconds,seconds,minutes] = [0,0,0,];
  const [int, setInt] = useState<any>()
  // Button Functions
  const handleStart = () => {
    if(int!==''){
      clearInterval(int);
    }
    const id = setInterval(displayTimer,10);
    setInt(id)
  }
  const handleLap = () => {
    alert('Time Lapped')
  }
  const handlePause = () => {
    clearInterval(int); 
  }
  const handleReset = () => {
    clearInterval(int);
    setTimer(('00 : 00 : 000 '))
  }
  const displayTimer = () => {
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
            }
        }
    }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    setTimer(`${m} : ${s} : ${ms}`);
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