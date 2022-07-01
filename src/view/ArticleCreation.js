import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Datepicker } from '@ui-kitten/components';
import {launchImageLibrary} from 'react-native-image-picker'

export default ArticleCreation = () => {
    // Constantes pour les inputs
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const option = {
        title: 'Select Image',
        type: 'library',
        option: {
            mediaType: 'photo',
            includeBase64x: false,
        },
    }

    const openGallery = async () => {

        const images = await launchImageLibrary(option);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <View style={{ flex: 2, width: '80%', alignSelf: 'center', marginTop: 50 }}>

                {/* title */}
                <View style={{ height: 50, marginBottom: 30 }}>
                    <TextInput
                        label="Titre" value={title} onChangeText={title => setTitle(title)}
                    />
                </View>

                {/* description */}
                <View style={{ height: 50, marginBottom: 30 }}>
                    <TextInput
                        label="Description" value={content} onChangeText={content => setContent(content)}
                    />
                </View>

                {/* date du début du chantier */}
                <View>
                    <Datepicker
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                    />
                </View>

                <View>
                    <Button
                        title="upload"
                        style={{ backgroundColor: "white", marginTop: 25 }}
                        onPress={openGallery}
                    >
                        Ajouter une photo
                    </Button>
                </View>

            </View>
        </View>
    );
}
