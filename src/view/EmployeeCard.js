import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import CardTest from '../components/Card.js';

export default EmployeeCard = () => {

    const state = {
        contacts: [
            { name: 'GOMEZ Matias', id: 1, job: 'Electricien' },
            { name: 'PIGUET Tom', id: 2, job: 'Carreleur' },
            { name: 'MASAKIDI Gérard', id: 3, job: 'Boucher' },
            { name: 'MONTIER Marine', id: 4, job: 'Influenceuse Onlyfans' },
            { name: 'BERTHE Damien', id: 5, job: 'Soubrette' }
        ]
    }

    return (
        <FlatList
        data={state.contacts}
        renderItem={(item) => <CardTest user={item}/>}
        keyExtractor={(item, index) => item.id}
      />

    );
}

const styles = StyleSheet.create({
    card: {
        width: 290,
        padding: 15,
        borderRadius: 20,
        position: "relative",
        height: 130,
        marginTop: 30
    },
    paragraph: {
        fontSize: 12,
        color: "#606060"
    }
});