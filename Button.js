import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Button(props) {
    return (
        <View style={{backgroundColor: 'black', borderColor: 'white', borderWidth: 1, width: '33.3%'}}>
            <Text style={{textAlign: 'center', fontSize: 24, color: 'white'}}>{props.number}</Text>
        </View>
    )
}
