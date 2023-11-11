import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

function EditBookScreen({ route, navigation }) {
    const { bookId } = route.params;
    const [title, setTitle] = useState('');

    useEffect(() => {
        const getBookDetails = async () => {
            try {
                const bookDoc = await firebase.firestore().collection('books').doc(bookId).get();
                setTitle(bookDoc.data().title);
            } catch (error) {
                alert(error.message);
            }
        };

        getBookDetails();
    }, []);

    const handleUpdate = async () => {
        try {
            await firebase.firestore().collection('books').doc(bookId).update({
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
            <Button title="Atualizar" onPress={handleUpdate} />
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

export default EditBookScreen;
