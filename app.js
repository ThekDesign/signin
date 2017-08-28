(function() {
	  // Initialize Firebase
	  var config = {
    apiKey: "AIzaSyBm8m3X6EYcXD7r0uSVUHCUa1KQEoaGx7g",
    authDomain: "web-start-6d7a9.firebaseapp.com",
    databaseURL: "https://web-start-6d7a9.firebaseio.com",
    projectId: "web-start-6d7a9",
    storageBucket: "web-start-6d7a9.appspot.com",
    messagingSenderId: "269529229616"
  };
  firebase.initializeApp(config);

	//Get elements
	const txtEmail = document.getElementById('inputEmail');
	const txtPassword = document.getElementById('inputPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignup = document.getElementById('btnSignup');
	const btnLogout = document.getElementById('btnLogout');

	//Add login event
	btnLogin.addEventListener("click", e=> {
		//Get email and password
		const email = txtEmail.value;
		const password = txtPassword.value;
		const auth = firebase.auth();
		//Log in
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
	});

		//Add Signup event
	btnSignup.addEventListener("click", e=> {
		//Get email and password
		// TODO:CHECK FOR REAL EMIALS
		const email = txtEmail.value;
		const password = txtPassword.value;
		const auth = firebase.auth();
		//Sign up
		const promise = auth.createUserWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
	});

	//Add Logout event
	btnLogout.addEventListener("click", e=> {
		firebase.auth().signOut();

	});

	//Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');

		}

	});

}());


