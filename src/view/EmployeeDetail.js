import React from "react";
import { Image, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, TextInput } from "react-native-paper";
import PhotoProfilVide from "../../assets/profil_vide.jpg";



export default EmployeeDetail = () => {

    return (
        <View style={{ justifyContent: 'center' }}>


            <View style={{ flexDirection: 'row', justifyContent: 'center', zIndex: 2 }}>
                <Image style={{ width: 120, height: 120, marginTop: 50, borderRadius: 10, position: 'absolute', top: 1 }} source={PhotoProfilVide} />
            </View>

            <View style={{ backgroundColor: '#e1e1e1', paddingBottom: 100, marginTop: 120, zIndex: 1 }}>

                <Text style={{ textAlign: 'center', marginTop: 70, fontSize: 25 }}>
                    Matias Gomez
                </Text>

                <View style={{ paddingHorizontal: 70 }}>
                    <ScrollView>
                        <TextInput style={{ marginTop: 40 }} mode='outlined' label={'Nom'} value={'Gomez'} />
                        <TextInput style={{ marginTop: 40 }} mode='outlined' label={'Prénom'} value={'Matias'} />
                        <TextInput style={{ marginTop: 40 }} mode='outlined' label={'Numero de télèphone'} value='07 80 52 58 91' />
                        <TextInput style={{ marginTop: 40 }} mode='outlined' label={'Email'} value='exemple@mail.com' />
                        <TextInput style={{ marginTop: 40 }} multiline mode='outlined' label={'Adresse'} value='26 Rue François Mauriac, Nogent Sur Oise 60180' />
                        <Button>
                            Enregistrer
                        </Button>

                        <Button icon="account" mode="contained" onPress={() => console.log('Pressed')}>
                            Press me
                        </Button>
                    </ScrollView>
                </View>

            </View>

        </View>

    )
}
