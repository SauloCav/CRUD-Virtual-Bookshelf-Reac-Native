# CRUD Virtual Bookshelf

This is a React Native application for managing a book collection. It includes basic CRUD operations (Create, Read, Update, Delete) and integrates with Firebase for authentication.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Firebase account and project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-book-app.git
   cd my-book-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase project configuration.
   - Create a file named `firebaseConfig.js` in the project root and paste your Firebase configuration:

     ```javascript
     // firebaseConfig.js
     export default {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };
     ```

### Usage

1. Start the app:

   ```bash
   npm start
   ```

## Features

- **Login Screen:** Users can log in with their credentials. The Firebase authentication system is used.

- **Book List Screen:** Displays a list of books with basic information. Users can navigate to the details, edit, and delete pages.

- **Add Book Screen:** Allows users to add a new book to the collection.

- **Edit Book Screen:** Lets users edit the details of an existing book.

- **Delete Book Screen:** Provides a confirmation before deleting a book.

## License

This project is licensed under the [MIT License](LICENSE).
