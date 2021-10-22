import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  appId: '1:619838544598:ios:5490dfaea19273dc784777',
  apiKey: 'AIzaSyAIJo2QT-ZJ4VqF_3WFBYB3tp50BNZ8EDM',
  projectId: 'react-native-demo-f7fcc',
  storageBucket: 'react-native-demo-f7fcc.appspot.com',
  authDomain: 'react-native-demo-f7fcc.firebaseapp.com',
  databaseURL: 'https://react-native-demo-f7fcc.firebaseio.com',
  messagingSenderId: '619838544598',
};

firebase.initializeApp(firebaseConfig);

export {firebase};
