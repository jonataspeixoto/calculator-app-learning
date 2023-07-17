import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <View style={{backgroundColor: 'black', borderColor: 'white', borderWidth: 1, width: '33.3%', height: '25%'}}>
            <TouchableOpacity onPress={() => props.calculationLogic(props.number)} style={{width: '100%', height: '100%', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontSize: 24, color: 'white'}}>{props.number}</Text>
            </TouchableOpacity>
        </View>
    )
}
