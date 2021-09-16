//--------------------- variable diclaration ---------------------//

var hamburger = document.getElementsByClassName("hamburger")[0];
var copyright = document.getElementsByClassName("copyright")[0];
var imageBack = document.getElementsByClassName("image-back")[0]; 
var goToBottom = document.getElementsByClassName("go-to-down")[0]; 
var loaderMode = document.getElementsByClassName("loaderMode")[0]; 
var accupation = document.getElementsByClassName("accupation")[0];  
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3];

var settingMainChild = document.getElementById("settingMainChild");  
var settingMain = document.getElementById("settingMain");  
var myImage = document.getElementById("myImage"); 
var effect8 = document.getElementById("effect8");  


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
}


//---------------------- window click -------------------------//

window.onclick = () => { 
    
}


//---------------------- window scroll --------------------------//

window.onscroll = () => {
    let windowPageYOffset = window.pageYOffset;  
    imageBack.style.filter = "blur("+windowPageYOffset/99 + "px)"; 
    effect9.style.left = .4 * windowPageYOffset + "px";
    effect8.style.left = .4 * windowPageYOffset + "px";


    // if(windowPageYOffset > 500){
    //     goToBottom.classList.add("active");
    // }  else {
    //     goToBottom.classList.remove("active");
    // }
       
}
 


//------------------ typing js --------------------//

var typed = new Typed('.type_text', {
    strings: ["", " Web Developer", " Web Designer", "Programmer", "Student","Freelancer" ],
    loop: true,
    backSpeed: 30,
    typeDelay: 1000,
    cursorChar: '_',
    typeSpeed: 100

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


//--------------------- setting for style function --------------------//
settingMain.addEventListener("click", () =>{
    settingMainChild.classList.toggle("active");  

    if(settingMain.className === "fa fa-cogs"){
        settingMain.classList.replace("fa-cogs","fa-times"); 
    } else {
        settingMain.classList.replace("fa-times","fa-cogs");
    }
})


