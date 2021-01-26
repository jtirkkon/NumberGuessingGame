import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [quess, setQuess] = useState('');
  const [infoText, setInfoText] = useState('Guess a number between 1-100');
  const [quesses, setQuesses] = useState(1);
  const [secretNumber, setSecretNumber] = useState(Math.floor(Math.random() * 100) + 1);
  console.log(secretNumber);
  
  const checkQuess = () => {
    setQuesses(quesses + 1);
    if (parseInt(quess) < secretNumber) {
      setInfoText(`Your guess ${quess} is too low`);
    } else if(parseInt(quess) > secretNumber) {
      setInfoText(`Your guess ${quess} is too high`);  
    } else {
      Alert.alert(`You guessed the number in ${quesses} quesses`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{infoText}</Text>
      <TextInput style={styles.textInputStyle} onChangeText={text => setQuess(text)} value={quess} keyboardType="number-pad"></TextInput>
      <Button title="MAKE QUESS" onPress={checkQuess}></Button>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 30
  },
});