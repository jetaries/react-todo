import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyAlcAJMRolPAkMBD40ZX-mqUxfbmw1itjA",
	    authDomain: "gordon-todo-app-3fe5e.firebaseapp.com",
	    databaseURL: "https://gordon-todo-app-3fe5e.firebaseio.com",
	    projectId: "gordon-todo-app-3fe5e",
	    storageBucket: "gordon-todo-app-3fe5e.appspot.com",
	    messagingSenderId: "1019475617303"
	};
	firebase.initializeApp(config);			
} catch (e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;