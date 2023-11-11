import firebase from 'firebase';

export const fetchBooks = () => async dispatch => {
    try {
        const booksSnapshot = await firebase.firestore().collection('books').get();
        const books = [];
        booksSnapshot.forEach(doc => {
            books.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: 'FETCH_BOOKS', payload: books });
    } catch (error) {
        console.error(error);
    }
};

export const addBook = (title) => async dispatch => {
    try {
        const docRef = await firebase.firestore().collection('books').add({ title });
        dispatch({ type: 'ADD_BOOK', payload: { id: docRef.id, title } });
    } catch (error) {
        console.error(error);
    }
};

export const updateBook = (bookId, title) => async dispatch => {
    try {
        await firebase.firestore().collection('books').doc(bookId).update({ title });
        dispatch({ type: 'UPDATE_BOOK', payload: { id: bookId, title } });
    } catch (error) {
        console.error(error);
    }
};

export const deleteBook = (bookId) => async dispatch => {
    try {
        await firebase.firestore().collection('books').doc(bookId).delete();
        dispatch({ type: 'DELETE_BOOK', payload: bookId });
    } catch (error) {
        console.error(error);
    }
};