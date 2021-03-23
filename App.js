import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {id: '0', name: 'Bijan'},
        {id: '1', name: 'Samin'},
        {id: '2', name: 'Reza'},
    ]);
    
    return (
        <View style={styles.container}>
            <FlatList data={people} renderItem={({item: person}) => (
                <Text style={styles.person}>{person.name}</Text>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    person: {
        backgroundColor: '#f5f5f5',
        marginBottom: 20,
        padding: 30,
        fontSize: 24,
    },
});
