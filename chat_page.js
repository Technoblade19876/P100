var firebaseConfig = {
    apiKey: "AIzaSyCNwA00v0X0DMIbvZCjPVOtjuYhHrhW3e4",
    authDomain: "p100-8c30c.firebaseapp.com",
    databaseURL: "https://p100-8c30c-default-rtdb.firebaseio.com",
    projectId: "p100-8c30c",
    storageBucket: "p100-8c30c.appspot.com",
    messagingSenderId: "134566454034",
    appId: "1:134566454034:web:00781402b20cb63ab2c9cb"
  };
  
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html"
}

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}