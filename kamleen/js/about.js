//--------------------- variable diclaration ---------------------//

var chatIcon = document.getElementById("chatIcon");
var chatBack = document.getElementsByClassName("chatBack")[0];
var navigation = document.getElementsByClassName("navigation")[0]; 

var hamburger = document.getElementsByClassName("hamburger")[0];
var copyright = document.getElementsByClassName("copyright")[0];
var imageBack = document.getElementsByClassName("image-back")[0];  
var loaderMode = document.getElementsByClassName("loaderMode")[0];  
var skillsDiv = document.getElementsByClassName("skills-div")[0];  
var educationDiv = document.getElementsByClassName("education-div")[0];  
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3];


var sendMsg = document.getElementById("sendMsg"); 
var message = document.getElementById("message"); 
var myImage = document.getElementById("myImage"); 
var effect8 = document.getElementById("effect8");  
var customCss = document.getElementById("customCss");   
var time = document.getElementById("datetime"); 

var uid = "";


//---------------------- window scroll --------------------------//

window.onscroll = () => {

    var pageY = window.pageYOffset;
    if(pageY > 180 ){ 
        skillsDiv.classList.add("active");
    }  
    if(pageY > 700){ 
        educationDiv.classList.add("active");
    }
    
}

//--------------------- chat section js ------------------------//
 
chatIcon.addEventListener("click", () =>{
    chatBack.classList.toggle("active");  
    navigation.classList.toggle("hide");  
    document.getElementById("fetch-msg").scrollTop = document.getElementById("fetch-msg").scrollHeight;

    if(chatIcon.className === "fa fa-comments"){
        chatIcon.classList.replace("fa-comments","fa-times"); 
        chatIcon.style.boxShadow = 'none';
        chatIcon.style.border = 'none';
    } else {
        chatIcon.classList.replace("fa-times","fa-comments");
        chatIcon.style.boxShadow = 'var(--box-shadow)';
    }
}) 


//---------------------- window resize -------------------------//
window.onresize = (e) => { 

    if(e.target.innerWidth > 900){
        nav.classList.remove("active"); 
        imageBack.classList.remove("active"); 
        copyright.classList.remove("active"); 
        hamburger.classList.replace("fa-times","fa-bars");
    } 
} 


//---------------------- window load -------------------------//

window.onload = (e) => {  
    loaderMode.style.opacity = "0";
    loaderMode.style.visibility = "hidden";
    customCss.href = "../"+localStorage.getItem("cssMode"); 

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
 
   firebase.auth().signInAnonymously()
   .then(() => {
     // Signed in.. 
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     // ...
   });
 
   firebase.auth().onAuthStateChanged((user) => { 
    if (user) { 
    uid = user.uid;
    firebase.database().ref("webChat").child(uid).on("child_added", function (snapshot) {  
        
        if (snapshot.val().uid === uid) { 
            document.getElementById("fetch-msg").innerHTML += `<div class="sender"><span>${snapshot.val().msg}<br><b>${seenFun(snapshot.val().seen)}</b></span></div>`;  
        } else {
            document.getElementById("fetch-msg").innerHTML += `<div class="reciver"><span>${snapshot.val().msg}<br><b>${snapshot.val().datetime}</b></span></div>`;    
        };                   
        document.getElementById("fetch-msg").scrollTop = document.getElementById("fetch-msg").scrollHeight;
    }) 
    } else {
        // alert("Please refresh the page");
    }
})


}


//-------------------------- seen time setting function ---------------------------//

function seenFun(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
   
    interval = seconds / 86400; 
    if(interval > 1){
        return datetime(date)
    } 
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return "just now"; 
  } 
  
function datetime(e){
let a = new Date(e);
let d = a.getDate(); 
let m = a.getMonth();
let y = a.getUTCFullYear();
let h = a.getHours();
let mm = a.getMinutes(); 
let x = "am";
if(d < 10){
    d = "0" + d;
} 
if(mm < 10){
    mm = "0" + mm;
} 
if(h>12){
    h = h - 12;
    x = "pm";
}
if(h < 10){
    h = "0" + h;
} 

if(h == 0){
    h = 12;
}
day = ["Sunday", "Monday", "Tuesday", "Thursday", "Wednesday", "Friday", "Saturday"]
month  = ["Jan","Fab","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]

return  d + month[m] + "," + y +" " + h + ":" + mm + x;

}


//----------------------- send msg js -------------------------//

sendMsg.addEventListener("click", () => { 
 
    if (message.value == "") {
        message.setAttribute("placeholder", "Please Typa a message");
        message.focus();
    } else {
        var db = firebase.database().ref("webChat").child(uid);
        db.push({
            "msg": message.value,
            "uid": uid,
            "datetime": time.value
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
 
 
//----------------- function mousesmove------------------------//
 
li1.onmousemove  = (event) => { 
    effect8.style.left = event.clientX + 'px';
    effect8.style.top = event.clientY + 'px';   
  }

li2.onmousemove  = (event) => { 
    effect8.style.left = event.clientX + 'px';
    effect8.style.top = event.clientY + 'px';   
  }

li3.onmousemove  = (event) => { 
    effect8.style.left = event.clientX + 'px';
    effect8.style.top = event.clientY + 'px';   
  }

li4.onmousemove  = (event) => { 
    effect8.style.left = event.clientX + 'px';
    effect8.style.top = event.clientY + 'px';   
  }
hamburger.onmousemove  = (event) => { 
    effect8.style.left = event.clientX + 'px';
    effect8.style.top = event.clientY + 'px';   
  }

 

//---------------------- hamburger function ------------------//

hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active"); 
    imageBack.classList.toggle("active"); 
    copyright.classList.toggle("active"); 

    if(hamburger.className === "hamburger fa fa-bars"){
         hamburger.classList.replace("fa-bars","fa-times"); 
    } else {
        hamburger.classList.replace("fa-times","fa-bars");
    }
})

