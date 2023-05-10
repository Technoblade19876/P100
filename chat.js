// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCNwA00v0X0DMIbvZCjPVOtjuYhHrhW3e4",
    authDomain: "p100-8c30c.firebaseapp.com",
    databaseURL: "https://p100-8c30c-default-rtdb.firebaseio.com",
    projectId: "p100-8c30c",
    storageBucket: "p100-8c30c.appspot.com",
    messagingSenderId: "134566454034",
    appId: "1:134566454034:web:00781402b20cb63ab2c9cb"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



