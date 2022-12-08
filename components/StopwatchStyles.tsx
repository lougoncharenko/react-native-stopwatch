import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
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