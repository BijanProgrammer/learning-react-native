import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [name, setName] = useState('Bijan');
    const [age, setAge] = useState(20);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, {name}!</Text>
            <Text style={styles.text}>You are {age} years old!</Text>
            <TextInput style={[styles.text, styles.input]} palceholder="e.g. John Doe" placeholderTextColor="#fafafa"
                       onChangeText={(value) => setName(value)}/>
            <StatusBar style="light"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        color: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fafafa',
    },
    input: {
        width: 200,
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#fafafa',
    },
});
