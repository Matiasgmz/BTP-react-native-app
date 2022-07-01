import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default EmployeeCard = () => {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.102:8000/api/users/list')
            .then((response) => {
                setAPIData(response);
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log(APIData.data);

    const renderItem = ({ item }) => (

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card key={item.usersId} style={styles.card}>
                <Card.Content>
                    <Title>{item.username}</Title>
                    <Paragraph style={styles.paragraph}>{item.roles}</Paragraph>
                </Card.Content>
                <View style={{ padding: 5, backgroundColor: "#F23030", position: "absolute", top: "22%", left: "95%", border: 'solid', borderColor: "#fc8686", borderWidth: 6, borderRadius: 100, width: 50, alignItems: "center" }}>
                    <Button><Icon name="angle-right" style={{ color: 'black' }} size={30} color="#900" /></Button>
                </View>
            </Card>
        </View>

    )

    return (

        <FlatList
            data={APIData.data}
            renderItem={renderItem}
            keyExtractor={item => item.usersId}
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