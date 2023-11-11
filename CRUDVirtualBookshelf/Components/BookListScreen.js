import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';

function BookListScreen({ navigation }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('books').onSnapshot(snapshot => {
            const bookData = [];
            snapshot.forEach(doc => bookData.push({ ...doc.data(), id: doc.id }));
            setBooks(bookData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={books}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <Button title="Adicionar Livro" onPress={() => navigation.navigate('AddBook')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    bookItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default BookListScreen;
