import React from 'react'
import {Text, View, StyleSheet } from 'react-native';

const Lap = (lap: any) => {
  return (
   <View style= {styles.display}>
        <Text style= {styles.displayText}>{lap.text}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
display: {
    padding: 20,
},
displayText: {
    color: 'brown',
    fontSize: 25,
    textAlign: 'center'
}
})
export default Lap