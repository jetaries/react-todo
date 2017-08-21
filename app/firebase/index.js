import firebase from 'firebase';

try {
	var config = {
	    apiKey: process.env.API_KEY,
	    authDomain: process.env.AUTO_DOMAIN,
	    databaseURL: process.env.DATABASE_URL,
	    projectId: "gordon-todo-app-3fe5e",
	    storageBucket: process.env.STORAGE_BUCKET,
	    messagingSenderId: "1019475617303"
	};
	firebase.initializeApp(config);			
} catch (e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;