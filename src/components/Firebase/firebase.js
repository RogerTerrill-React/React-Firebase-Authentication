import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAz0uk6X6YC8qxFcfeNytM__fyvEnbXIIM',
  authDomain: 'react-with-firebase-c626d.firebaseapp.com',
  databaseURL: 'https://react-with-firebase-c626d.firebaseio.com',
  projectId: 'react-with-firebase-c626d',
  storageBucket: 'react-with-firebase-c626d.appspot.com',
  messagingSenderId: '776030681558'
};

firebase.initializeApp(config);

export default firebase;
