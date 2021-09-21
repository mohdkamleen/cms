//--------------------- variable diclaration ---------------------//

var chatIcon = document.getElementById("chatIcon");
var chatBack = document.getElementsByClassName("chatBack")[0];
var navigation = document.getElementsByClassName("navigation")[0]; 

var hamburger = document.getElementsByClassName("hamburger")[0];
var copyright = document.getElementsByClassName("copyright")[0];
var imageBack = document.getElementsByClassName("image-back")[0];  
var loaderMode = document.getElementsByClassName("loaderMode")[0];  
var socialDiv = document.getElementsByClassName("social-div")[0];   
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3]; 

var sendMsg = document.getElementById("sendMsg");  
var time = document.getElementById("datetime"); 
var message = document.getElementById("message"); 
var myImage = document.getElementById("myImage"); 
var effect8 = document.getElementById("effect8");  
var customCss = document.getElementById("customCss");    
var sendContact = document.getElementById("sendContact");  

var uid = "";


 

//---------------------- window scroll --------------------------//

window.onscroll = () => {

    var pageY = window.pageYOffset; 
    if(pageY > 200 ){  
        socialDiv.classList.add("active");
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

window.onload = () => {   
    loaderMode.style.opacity = "0";
    loaderMode.style.visibility = "hidden";
    customCss.href = "../"+localStorage.getItem("cssMode"); 


    
//--------------------- firebase code ---------------------// 
    var fconfig = {
        apiKey: "AIzaSyCNNYKBE58pZQtAbBFQh98zg2yKtlgKWXU",
        authDomain: "mohd-e4f8e.firebaseapp.com",
        databaseURL: "https://mohd-e4f8e-default-rtdb.firebaseio.com",
        projectId: "mohd-e4f8e",
        storageBucket: "mohd-e4f8e.appspot.com",
        messagingSenderId: "1054922414390"
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
            document.getElementById("fetch-msg").innerHTML += `<div class="sender"><span>${snapshot.val().msg}</span><br><b>${snapshot.val().datetime}</b></div>`;  
        } else {
            document.getElementById("fetch-msg").innerHTML += `<div class="reciver"><span>${snapshot.val().msg}</span><br><b>${snapshot.val().datetime}</b></div>`;  
        };                   
        document.getElementById("fetch-msg").scrollTop = document.getElementById("fetch-msg").scrollHeight;
    }) 
    } else {
        // alert("Please refresh the page");
    }
})


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


//----------------------- send keyup function ----------------------------//

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

  

//---------------- send conctact msg function------------------//
userName = document.getElementById("user-name");
userContact = document.getElementById("user-contact");
userSubject = document.getElementById("user-subject");
userMessage = document.getElementById("user-message");
processing = document.getElementsByClassName("processing")[0];

sendContact.addEventListener("click", () => {


    if (userName.value == "") {
        userName.setAttribute("placeholder", "Please type username");
        userName.focus();
    } else if (userContact.value == ""){
        userContact.setAttribute("placeholder", "Please type contact");
        userContact.focus();
    } else if (userSubject.value == ""){
        userSubject.setAttribute("placeholder", "Please type subject");
        userSubject.focus(); 
    } else if (userMessage.value == ""){
        userMessage.setAttribute("placeholder", "Please type message");
        userMessage.focus();
    } else {
        
    processing.style.opacity = '1';
    processing.style.visibility = 'visible';

        var db = firebase.database().ref("webContact");
        db.push({
            "user": userName.value,
            "subject": userSubject.value,
            "contact": userContact.value,
            "msg": userMessage.value,
            "datetime": time.value,
            "uid": uid
        }).then(() => {
            userName.value = "";
            userSubject.value = "";
            userMessage.value = "";
            userContact.value = ""; 

            processing.style.opacity = '0';
            processing.style.visibility = 'hidden';

        });
        
        userMessage.setAttribute("placeholder", "Type a message");
        userSubject.setAttribute("placeholder", "Subject");
        userContact.setAttribute("placeholder", "Email or phone");
        userName.setAttribute("placeholder", "Username");
    }
        
})