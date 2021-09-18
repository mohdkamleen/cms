//--------------------- variable diclaration ---------------------//

var hamburger = document.getElementsByClassName("hamburger")[0];
var copyright = document.getElementsByClassName("copyright")[0];
var imageBack = document.getElementsByClassName("image-back")[0]; 
var goToBottom = document.getElementsByClassName("go-to-down")[0]; 
var loaderMode = document.getElementsByClassName("loaderMode")[0]; 
var accupation = document.getElementsByClassName("accupation")[0];  
var cardDiv = document.getElementsByClassName("card-div")[0];  
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3];


var myImage = document.getElementById("myImage"); 
var effect8 = document.getElementById("effect8");  
var customCss = document.getElementById("customCss");   


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
    var css = localStorage.getItem("cssMode");
    loaderMode.style.opacity = "0";
    loaderMode.style.visibility = "hidden";
    customCss.href = css; 
}


//---------------------- window click -------------------------//
 
// window.onclick = () => { 

// }
 



//---------------------- window scroll --------------------------//

window.onscroll = () => {

    var pageY = window.pageYOffset;
    if(pageY > 200 ){
        cardDiv.classList.add("active");
    }  
    
}
 


 
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

