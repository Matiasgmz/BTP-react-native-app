
import axios from "axios";
import { Button, Card, Text, Title } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ArticleList() {

    const [APIData, setAPIData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        axios.get('http://192.168.1.102:8000/api/article/list')
            .then((response) => {
                setAPIData(response);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [APIData]);



    const setData = (item) => {
        var path = `http://192.168.1.102:8000/api/article/delete/`;
        var id = item.articlesId;
        var createLink = path + id;


        axios.delete(createLink).then(res => {

            const newArticleList = APIData.data.filter(item => item.articlesId !== id);
            setAPIData(newArticleList);
            console.log(newArticleList);
        });
    }

    const renderItem = ({ item }) => (


        <Card style={{ marginVertical: '10%' }}>
            <Card.Title title={item.title} subtitle={item.date} />
            <Card.Content style={{ marginBottom: 25 }}>
                <Text numberOfLines={4}>{item.content}</Text>

                <Button onPress={() => navigation.navigate('ArticleMenu')}>
                    Afficher plus
                </Button>
            </Card.Content>
            <Card.Cover source={{ uri: "http://192.168.1.102:8000" + item.image }} />
            <Card.Actions>
                <Button>Modifier</Button>
                <Button onPress={() => setData(item)}>Supprimer</Button>
            </Card.Actions>
        </Card>

    );

    return (
        <FlatList
            data={APIData.data}
            renderItem={renderItem}
            keyExtractor={item => item.articlesId}
        />
    );
}
