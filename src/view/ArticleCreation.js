import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Datepicker } from '@ui-kitten/components';


export default ArticleCreation = () => {
    // Constantes pour les inputs
    const [title, setTitle] = useState("");
    const [clientmail, setClientMail] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

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
                        label="Description" value={description} onChangeText={description => setDescription(description)}
                    />
                </View>


                {/* client mail */}
                <View style={{ height: 50, marginBottom: 30 }}>
                    <TextInput
                  
                        dataDetectorTypes={'calendarEvent'}
                        label="Mail du client" value={clientmail} onChangeText={clientmail => setClientMail(clientmail)}
                    />
                </View>


                {/* date du début du chantier */}
                <View>
                    <Datepicker
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                    />
                </View>

            </View>
        </View>
    );
}
