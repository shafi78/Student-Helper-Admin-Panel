import firebase from 'firebase/compat/app';
import 'firebase/auth';


const firebaseConfig = {
    
  };


if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase ;
