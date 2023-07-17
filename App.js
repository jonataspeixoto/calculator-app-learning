import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Button from './Button';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [signal, setSignal] = useState('');
  const [strCalculation, setStrCalculation] = useState('0');

  const numbers = [];

  for(let i = 0; i <= 9; i++){
    numbers.push(i);
  }
  
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar style="auto" hidden />
      <Text style={{fontSize: 24, color: 'white'}}>{strCalculation}</Text>
      <View style={{flexDirection: 'row'}}>
      <TouchableHighlight style={{width: '25%', backgroundColor: 'rgb(20, 20, 20)'}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>+</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{width: '25%', backgroundColor: 'rgb(20, 20, 20)'}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>-</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{width: '25%', backgroundColor: 'rgb(20, 20, 20)'}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>/</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{width: '25%', backgroundColor: 'rgb(20, 20, 20)'}}>
        <Text style={{fontSize: 24, textAlign: 'center', color: 'white'}}>*</Text>
      </TouchableHighlight>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', borderTopColor: 'black', borderTopWidth: 2}}>
        {
          numbers.map((val) => {
            return (
              <Button key={val} number={val.toString()}></Button>
            );
          })
        }
      </View>
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
});
