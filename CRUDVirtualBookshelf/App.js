import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import rootReducer from './Redux/Reducers';
import LoginScreen from './Components/LoginScreen';
import BookListScreen from './Components/BookListScreen';
import AddBookScreen from './Components/AddBookScreen';
import EditBookScreen from './Components/EditBookScreen';
import DeleteBookScreen from './Components/DeleteBookScreen';

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

function App() {
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate('BookList');
            } else {
                navigation.navigate('Login');
            }
        });
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="BookList" component={BookListScreen} />
                    <Stack.Screen name="AddBook" component={AddBookScreen} />
                    <Stack.Screen name="EditBook" component={EditBookScreen} />
                    <Stack.Screen name="DeleteBook" component={DeleteBookScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
