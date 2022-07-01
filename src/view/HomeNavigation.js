import { View, ScrollView } from 'react-native';
import React from 'react';
import { Button, IconButton, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default HomeNavigation = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ padding: '10%' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <Button  onPress={() => navigation.navigate('EmployeeCard')} style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#b3abd1', borderRadius: 15}} mode="contained" >
                        <Icon name="user" style={{ color: 'black' }} size={80} color="#900" />
                    </Button>

                    <Button style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#b3abd1', borderRadius: 15}} mode="contained" onPress={() => console.log('Pressed')}>
                        <Icon name="calendar" style={{ color: 'black' }} size={80} color="#900" />
                    </Button>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <Button onPress={() => navigation.navigate('Login')} style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#cb5656', borderRadius: 15}} mode="contained">
                        <Icon name="key" style={{ color: 'black' }} size={80} color="#900" />
                    </Button>

                    <Button onPress={() => navigation.navigate('ArticleMenu')} style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#cb5656', borderRadius: 15}} mode="contained">
                        <Icon name="newspaper" style={{ color: 'black' }} size={80} color="#900" />
                    </Button>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <Button  style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#829341', borderRadius: 15}} mode="contained">
                    </Button>

                    <Button style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#829341', borderRadius: 15}} mode="contained" onPress={() => console.log('Pressed')}>
                    </Button>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <Button style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#d1dd4c', borderRadius: 15}} mode="contained" onPress={() => console.log('Pressed')}>
                    </Button>

                    <Button style={{ marginTop: '5%', width: '45%', height: 150, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#d1dd4c', borderRadius: 15}} mode="contained" onPress={() => console.log('Pressed')}>
                    </Button>

                </View>

            </View>
        </ScrollView>
    );
}