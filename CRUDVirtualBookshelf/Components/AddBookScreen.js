import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

function AddBookScreen({ navigation }) {
    const [title, setTitle] = useState('');

    const handleAdd = async () => {
        try {
            await firebase.firestore().collection('books').add({
                title,
            });
            navigation.goBack();
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Título do Livro" 
                value={title} 
                onChangeText={setTitle} 
                style={styles.input}
            />
            <Button title="Adicionar" onPress={handleAdd} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default AddBookScreen;
