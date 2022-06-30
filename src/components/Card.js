import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Title, Paragraph } from 'react-native-paper';


export default function CardTest(props) {
    const { user } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card key={user.item.id} style={styles.card}>
                <Card.Content>
                    <Title>{user.item.name}</Title>
                    <Paragraph style={styles.paragraph}>{user.item.job}</Paragraph>
                </Card.Content>
                <View style={{ padding: 5, backgroundColor: "#F23030", position: "absolute", top: "22%", left: "95%", border: 'solid', borderColor: "#fc8686", borderWidth: 6, borderRadius: 100 , width: 50, alignItems: "center"}}>
                    <Icon name="angle-right" style={{ color: 'black' }} size={30} color="#900" />
                </View>
            </Card>
        </View>
    )
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