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

var settingMainChild = document.getElementById("settingMainChild");  
var settingMain = document.getElementById("settingMain");  
var myImage = document.getElementById("myImage"); 
var effect8 = document.getElementById("effect8");  
var customCss = document.getElementById("customCss");  
var customCssAll = document.getElementById("customCssAll");  


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
    customCss.setAttribute("href", css);
    // customCssAll.setAttribute("href", "../"+css);
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


//-------------------- change css file ----------------------//

function changeCssFile(e){
    localStorage.setItem("cssMode", e);
    customCss.setAttribute("href",e);
    // customCssAll.setAttribute("href", "../"+e); 
}


//--------------------- setting for style function --------------------//

settingMain.addEventListener("click", () =>{
    settingMainChild.classList.toggle("active");  

    if(settingMain.className === "fa fa-cogs"){
        settingMain.classList.replace("fa-cogs","fa-times"); 
    } else {
        settingMain.classList.replace("fa-times","fa-cogs");
    }
})


//------------------------ api for services -----------------------//

services = [
    {
        "icon": "fa-html5",
        "title": "Web Developer",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"

    },
    {
        "icon": "fa-code",
        "title": "Web Design",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"

    },
    {
        "icon": "fa-paint-brush",
        "title": "Graphic Design",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"
    },
    {
        "icon": "fa-mobile",
        "title": "Responsive Design",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"

    },
    {
        "icon": "fa-wordpress",
        "title": "Wordpress",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"

    },
    {
        "icon": "fa-microchip",
        "title": "Hardware",
        "descrition": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam?"

    },
];


services.forEach(e => {
    
    cardDiv.innerHTML += `
        <div class="card">
        <div class="card-icon">
            <i class="fa ${e.icon}"></i>
        </div>
        <div class="card-header">
            <h4>${e.title}</h4>
        </div>
        <div class="card-body">
             ${e.descrition}
        </div> 
        </div>
    `;

});
