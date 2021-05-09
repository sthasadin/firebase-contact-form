import firebase from 'firebase'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8cnxwD__KPS-6cLai1KfC7nNqmwgBkM4",
    authDomain: "contact-form-demo-f6ecd.firebaseapp.com",
    projectId: "contact-form-demo-f6ecd",
    storageBucket: "contact-form-demo-f6ecd.appspot.com",
    messagingSenderId: "979864665749",
    appId: "1:979864665749:web:56cdfc3e2b3dd3231d259c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db =firebase.firestore();
  export {db};