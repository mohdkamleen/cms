var hamburger = document.getElementsByClassName("hamburger")[0];
var copyright = document.getElementsByClassName("copyright")[0];
var imageBack = document.getElementsByClassName("image-back")[0]; 
var goToBottom = document.getElementsByClassName("go-to-down")[0]; 
var logo = document.getElementsByClassName("logo")[0]; 
var accupation = document.getElementsByClassName("accupation")[0]; 
var nav = document.getElementsByTagName("nav")[0];
var li1 = document.getElementsByTagName("li")[0];
var li2 = document.getElementsByTagName("li")[1];
var li3 = document.getElementsByTagName("li")[2];
var li4 = document.getElementsByTagName("li")[3];
var myImage = document.getElementById("myImage");
var effect1 = document.getElementById("effect1"); 
var effect5 = document.getElementById("effect5"); 
var effect8 = document.getElementById("effect8"); 
var effect9 = document.getElementById("effect9"); 

document.body.onresize = (e) => {
    if(e.target.innerWidth > 900){
        nav.classList.remove("active"); 
        imageBack.classList.remove("active"); 
        copyright.classList.remove("active"); 
        hamburger.classList.replace("fa-times","fa-bars");
    }

}

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



//---------------------- window scroll --------------------------//

window.onscroll = () => {
    let windowPageYOffset = window.pageYOffset; 

     
    imageBack.style.filter = "blur("+windowPageYOffset/99 + "px)"; 
    effect9.style.left = .4 * windowPageYOffset + "px";
    effect8.style.left = .4 * windowPageYOffset + "px";


    if(windowPageYOffset > 500){
        goToBottom.classList.add("active");
    }  else {
        goToBottom.classList.remove("active");
    }
       
}


goToBottom.addEventListener("click", () => {
    location = '#';
})
 
 


//------------------ typing js --------------------//

var typed = new Typed('.type_text', {
    strings: ["", " Web Developer", " Web Designer", "Programmer", "Student","Freelancer" ],
    loop: true,
    backSpeed: 30,
    typeDelay: 1000,
    cursorChar: '_',
    typeSpeed: 100

    }); 

 
//------------------------ function mousesmove------------------------//

logo.onmousemove  = (event) => { 
    effect1.style.left = event.clientX + 'px';
    effect1.style.top = event.clientY + 'px';   
  } 
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


accupation.onmousemove  = (event) => { 
    effect9.style.left = event.clientX + 'px';
    effect9.style.top = event.clientY + 'px';   
}

hamburger.onmousemove  = (event) => { 
    effect1.style.left = event.clientX + 'px';
    effect1.style.top = event.clientY + 'px';   
}
