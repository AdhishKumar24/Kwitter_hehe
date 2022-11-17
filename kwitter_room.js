// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDcnxn4Z0OJDpdOLADLFAsM85e-9DPqBf0",
    authDomain: "project2-3a897.firebaseapp.com",
    databaseURL: "https://project2-3a897-default-rtdb.firebaseio.com",
    projectId: "project2-3a897",
    storageBucket: "project2-3a897.appspot.com",
    messagingSenderId: "779042563380",
    appId: "1:779042563380:web:f023c9b54f809cf0163161",
    measurementId: "G-BNF4QYZFX1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("name_of_room")
    localStorage.removeItem("user_name")
    window.location="kwitter.html"
}

welcom=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+welcom;
  function Add_room(){
   roomname=document.getElementById("input_room").value;
   firebase.database().ref("/").child(roomname).update({
     purpose:"adding room name"
   })
   localStorage.setItem("name_of_room",roomname)
   window.location="kwitter_page.html"
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log(Room_names)
row="<div id='"+Room_names+"' onclick='Redirect(this.id)'>"+Room_names+"</div>"
console.log(row)
document.getElementById("output").innerHTML+=row;
   //End code
   });});}

getData();

function Redirect(r_name){
console.log("I have clicked on "+r_name);
localStorage.setItem("name_of_room",r_name)
window.location="kwitter_page.html"
}