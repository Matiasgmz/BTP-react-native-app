import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default ArticleMenu = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            
            <View style={{ flex:2, width: '80%', alignSelf: 'center', marginTop: 50 }}>
                <Button onPress={() => navigation.navigate('ArticleCreation')}  mode="contained" style={{ marginBottom:30 }}>Ajouter</Button>
                <Button onPress={() => navigation.navigate('ArticleList')}  mode="contained">Liste</Button>               
            </View>
        </View>
    );
}
