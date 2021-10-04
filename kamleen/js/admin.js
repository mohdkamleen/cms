 

//--------------------- variable diclaration ---------------------// 
var imageBack = document.getElementsByClassName("image-back")[0];   
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3];

  
var effect8 = document.getElementById("effect8");  
var customCss = document.getElementById("customCss");    
 
 
 
  var users = document.getElementById("fetchUser");
  var userchild = document.getElementById("users");

  window.onload = (e) => { 
    customCss.href = localStorage.getItem("cssMode"); 


      //--------------------- firebase code ---------------------// 
      var fconfig = {
          apiKey: "AIzaSyDh6YfUPvUUDDQf0ZRyDJ1ImlCAObv4nuo",
          authDomain: "mohd-kamleen.firebaseapp.com",
          projectId: "mohd-kamleen",
          storageBucket: "mohd-kamleen.appspot.com",
          messagingSenderId: "528612457742",
          appId: "1:528612457742:web:1bdc2804303d5f20b52b5f",
          measurementId: "G-8HHDKNW57V"
      };
      firebase.initializeApp(fconfig);

 
      // var email = prompt("enter your email: ");
      // var password = prompt("enter your password: ");

      firebase.auth().signInWithEmailAndPassword("kamleen@gmail.com", "kamleen123")
          .then((e) => {


              firebase.database().ref("webChat").on("child_added", function (snapshot) { 

                document.getElementById("countUser").innerHTML = snapshot.numChildren() + " Users"
                console.log(snapshot)
                  users.innerHTML += `  
                <div id="users"  data-uid="${snapshot.key}" data-msg="${snapshot.numChildren()}" onclick="getCurrentUser(this);">
                    <img src="../image/user.jpg" alt="">
                    <h4> ${snapshot.key} <br> <span>${snapshot.numChildren()}  Message</span></h4> 
                </div>  `;
              })


          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ...
              location.reload()
          });



  }

  var uid = "";
  var admin = "";

  function hideUser(){
    users.style.opacity = "0"
    users.style.visibility = "hidden"
  }

  function showUser(){
    users.style.opacity = "1"
    users.style.visibility = "visible"
  }


   
   



  function getCurrentUser(e) {
 
      uid = e.getAttribute('data-uid');
      var div = document.getElementsByClassName("chat-user")[0];
      div.innerHTML = `  
        
                    <div class="user-child">
                        <div class="header">
                            <img src="../image/user.jpg" alt="">
                            <h4>${e.getAttribute("data-uid")}
                            <br> <span> ${e.getAttribute("data-msg")} Message </span>
                            </h4> 
                        </div>  

                        <div class="chat-msg">
                            <ol id="fetch-msg">
                                  
                            </ol>
                        </div>

                        <div class="inputs">
                            <input id="message" placeholder="Type a message">
                            <input type="hidden" id="datetime" >
                            <button id="sendMsg" class="fa fa-send"></button>
                        </div> 
                </div>`; 



      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              admin = user.uid;
              firebase.database().ref("webChat").child(uid).on("child_added", function (snapshot) {

                  if (snapshot.val().uid === admin) {
                      document.getElementById("fetch-msg").innerHTML += `
                      <li class="send"> 
                              <span>${snapshot.val().msg}<br><i>${snapshot.val().datetime}</i></span>
                      </li>
                      `;
                  } else {
                      document.getElementById("fetch-msg").innerHTML += `
                      <li class="reciev"> 
                              <span>${snapshot.val().msg}<br><i>${snapshot.val().datetime}</i></span>
                      </li>`;
                  };
                  document.getElementsByClassName("chat-msg")[0].scrollTop = document.getElementsByClassName("chat-msg")[0].scrollHeight;
              })
          } else {
              // alert("user not authenticate")
          }
      })



      //----------------------- send msg js -------------------------//

      sendMsg.addEventListener("click", () => {

          var message = document.getElementById("message");
          var time = document.getElementById("datetime");

          if (message.value == "") {
              message.setAttribute("placeholder", "Please Typa a message");
              message.focus();
          } else {
              var db = firebase.database().ref("webChat").child(uid);
              db.push({
                  "msg": message.value,
                  "uid": admin,
                  "datetime": time.value,
                  "seen": new Date().getTime()
              });
              message.value = "";
              message.focus();
              document.getElementById("fetch-msg").scrollTop = document.getElementById("fetch-msg").scrollHeight;
          }

      })



      //----------------------- msg keyup function ----------------------------//

      message.addEventListener("keyup", function (e) {
          if (e.keyCode === 13) {
              e.preventDefault();
              sendMsg.click();
          }
      });





  }



  
    
window.onmousemove  = (event) => { 
  effect8.style.left = event.clientX + 'px';
  effect8.style.top = event.clientY + 'px';   
}

