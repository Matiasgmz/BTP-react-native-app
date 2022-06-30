import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Text, View } from 'react-native';


export default Login = () => {
  // Constantes pour les inputs
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");



  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Gomes BTP</Text>
      </View>

      <View style={{ flex: 2, width: '80%', alignSelf: 'center' }}>

        {/* Email */}
        <View style={{ height: 50 }}>
          <TextInput
            label="Email" value={mail} onChangeText={mail => setMail(mail)}
          />
        </View>

        {/* Pwd */}
        <View style={{ height: 50 }}>
          <TextInput label="Password" value={pwd} type={'password'} onChangeText={pwd => setPwd(pwd)}
            secureTextEntry right={<TextInput.Icon name="eye" />}
          />
        </View>

        <Button style={{ marginTop: 50 }} mode="contained">Se connecter</Button>
        <Text style={{ fontStyle: 'italic', marginTop: 20 }}>Mot de passe oublié ?</Text>
 

      </View>
    </View>
  );
}




