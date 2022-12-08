import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stopwatch = () => {
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
      

    })

  

export default Stopwatch