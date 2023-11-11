import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('BookList');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                style={styles.input}
            />
            <TextInput 
                placeholder="Senha" 
                value={password} 
                onChangeText={setPassword} 
                style={styles.input}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
});

export default LoginScreen;
