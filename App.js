import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [signal, setSignal] = useState('');
  const [strCalculation, setStrCalculation] = useState('0');

  const numbers = [];

  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  const calculationLogic = (n) => {
    console.log(n);
    if (signal == '') {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStrCalculation(parseInt(firstNumber.toString() + n.toString()));
    }

    if ((n == '/' || n == '*' || n == '-' || n == '+') && secondNumber == 0) {
      setStrCalculation(firstNumber.toString() + n);
      setSignal(n);
    }
    if (signal != '') {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStrCalculation(firstNumber + signal + parseInt(secondNumber.toString() + n.toString()));
    }
    if (n == '=') {
      let result = 0;
      if (signal == '+') {
        result = firstNumber + secondNumber;
      } else if (signal == '-') {
        result = firstNumber - secondNumber;
      } else if (signal == '/') {
        result = firstNumber / secondNumber;
      } else if (signal == '*') {
        result = firstNumber * secondNumber;
      }
      setStrCalculation(result);
      setSignal('');
      setFirstNumber(result);
      setSecondNumber(0);
    }
    if (n == 'C'){
      setStrCalculation(0);
      setSignal('');
      setFirstNumber(0);
      setSecondNumber(0);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar style="auto" hidden />
      <View style={styles.header}>
        <Text style={{ fontSize: 24, color: 'white' }}>{strCalculation}</Text>
      </View>
      <View style={{ flexDirection: 'row', height: '16.6%', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => calculationLogic('C')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculationLogic('+')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculationLogic('-')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculationLogic('/')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculationLogic('*')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculationLogic('=')} style={{ width: '16.6%', backgroundColor: 'rgb(20, 20, 20)', justifyContent: 'center', height: '100%' }}>
          <Text style={{ fontSize: 24, textAlign: 'center', color: 'white' }}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', borderTopColor: 'black', borderTopWidth: 2, height: '66.8%' }}>
        {
          numbers.map((val) => {
            return (
              <Button calculationLogic={calculationLogic} key={val} number={val.toString()}></Button>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(20, 20, 20)',
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20
  }
});
