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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         names = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ names +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span><button><hr>";

         row = name_with_tag + message_with_tag +like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on the like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : update_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location.replace("kwitter.html");
      }
