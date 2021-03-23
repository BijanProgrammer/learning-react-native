import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {id: '0', name: 'Bijan'},
        {id: '1', name: 'Samin'},
        {id: '2', name: 'Reza'},
    ]);
    
    const itemPressHandler = (id) => {
        setPeople((oldPeople) => {
            return oldPeople.map(person => {
                if (person.id === id)
                    person.name += ' Clicked';
                
                return person;
            });
        });
    };
    
    return (
        <View style={styles.container}>
            <FlatList data={people} renderItem={({item: person}) => (
                <TouchableOpacity onPress={() => itemPressHandler(person.id)}>
                    <Text style={styles.person}>{person.name}</Text>
                </TouchableOpacity>
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
