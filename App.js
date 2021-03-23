import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [people, setPeople] = useState([
        {id: 0, name: 'Bijan'},
        {id: 1, name: 'Samin'},
        {id: 2, name: 'Reza'},
    ]);
    
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    people.map(person => (
                        <View key={person.id}>
                            <Text style={styles.person}>{person.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
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
