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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
          console.log("Room Name - " + Room_names);
          row = "<div class='room' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
          document.getElementById("output").innerHTML +=row;
        //End code
      });
    });
}
getData();

function addRoom(){
  
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })
  
  localStorage.setItem("room_name", room_name);

  window.location = "chat_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html"
}