import React from 'react'
import {Text, View, StyleSheet } from 'react-native';

interface Props {
    text: string
}

const Lap = ({text}: Props) => {
  return (
   <View style= {styles.display}>
        <Text style= {styles.displayText}>{text}</Text>
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