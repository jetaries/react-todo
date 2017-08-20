import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAlcAJMRolPAkMBD40ZX-mqUxfbmw1itjA",
    authDomain: "gordon-todo-app-3fe5e.firebaseapp.com",
    databaseURL: "https://gordon-todo-app-3fe5e.firebaseio.com",
    projectId: "gordon-todo-app-3fe5e",
    storageBucket: "gordon-todo-app-3fe5e.appspot.com",
    messagingSenderId: "1019475617303"
};
firebase.initializeApp(config);		

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Gordon',
		age: 37
	}
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
	console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
	console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
	text: 'walk buggy'
});

console.log('new id: ', newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
	text: 'walk buggy'
});

var newTodoRef = todosRef.push({
	text: 'walk toggie'
});