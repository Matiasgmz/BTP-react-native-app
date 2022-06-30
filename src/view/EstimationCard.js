import React from 'react';
import { Title, Card } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function EstimationCard(props) {
    const { estimation } = props

    return (
        <View style={styles.container}>
            <Card key={estimation.item.id} style={styles.estimationCard}>
                <Card.Content style={styles.cardContent}>
                    <Title style={styles.title}>{estimation.item.name}</Title>
                    <View>
                        <Icon name="trash" style={{ color: 'red' }} size={20} color="#900" />
                    </View>
                </Card.Content>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    estimationCard: {
        width: '90%',
        borderRadius: 20,
        paddingRight: 15,
        marginTop: 30,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 12
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 130
    }
});