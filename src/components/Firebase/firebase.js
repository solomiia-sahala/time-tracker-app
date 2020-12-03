import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaHPvkSvms9XTx9fpdnmaqTqoDiMGIsZM",
    authDomain: "time-tracker-f4d5e.firebaseapp.com",
    databaseURL: "https://time-tracker-f4d5e.firebaseio.com",
    projectId: "time-tracker-f4d5e",
    storageBucket: "time-tracker-f4d5e.appspot.com",
    messagingSenderId: "314816034873",
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;