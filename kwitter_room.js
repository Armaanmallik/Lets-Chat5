var firebaseConfig = {
      apiKey: "AIzaSyD1ihCuwCHv3Np9MZjNZT1hqnevNYMCzyI",
      authDomain: "lets-chat-e1651.firebaseapp.com",
      databaseURL: "https://lets-chat-e1651-default-rtdb.firebaseio.com",
      projectId: "lets-chat-e1651",
      storageBucket: "lets-chat-e1651.appspot.com",
      messagingSenderId: "45802723863",
      appId: "1:45802723863:web:4ea160cf7aa42ceb691a52",
      measurementId: "G-0FSLK97XMW"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    room_name = localStorage.getItem("room_name");

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
      }
      
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });
document.getElementById("msg").value = "";
}
      
