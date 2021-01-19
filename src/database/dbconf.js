import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAXS3K0pRLhfum2d-MiKIdZspNxmJcYChg",
    authDomain: "billboard-ecommerce.firebaseapp.com",
    projectId: "billboard-ecommerce",
    storageBucket: "billboard-ecommerce.appspot.com",
    messagingSenderId: "472655236884",
    appId: "1:472655236884:web:4133d760356bb1b83e7c01"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}