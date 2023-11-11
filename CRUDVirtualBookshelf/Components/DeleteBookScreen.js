import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import firebase from 'firebase';

function DeleteBookScreen({ route, navigation }) {
    const { bookId } = route.params;

    const handleDelete = async () => {
        try {
            await firebase.firestore().collection('books').doc(bookId).delete();
            Alert.alert('Sucesso', 'Livro excluído com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Erro ao excluir o livro. Tente novamente.');
            console.error(error);
        }
    };

    const handleCancel = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Tem certeza de que deseja excluir este livro?</Text>
            <View style={styles.buttons}>
                <Button title="Confirmar Exclusão" onPress={handleDelete} color="red" />
                <Button title="Cancelar" onPress={handleCancel} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default DeleteBookScreen;
