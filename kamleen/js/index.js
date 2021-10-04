 

//--------------------- variable diclaration ---------------------//
   
var navigation = document.getElementsByClassName("navigation")[0]; 
var content = document.getElementsByClassName("content")[0]; 
 
var hamburger = document.getElementsByClassName("hamburger")[0]; 
var copyright = document.getElementsByClassName("copyright")[0]; 
var loaderMode = document.getElementsByClassName("loaderMode")[0]; 
var accupation = document.getElementsByClassName("accupation")[0];  
var cardDiv = document.getElementsByClassName("card-div")[0];   
var logo = document.getElementsByClassName("logo")[0]; 

var nav = document.getElementsByTagName("nav")[0]; 
 
 



//---------------------- window resize -------------------------//
window.onresize = (e) => { 

    if(e.target.innerWidth > 900){
        nav.classList.remove("active");  
        copyright.classList.remove("active"); 
        hamburger.classList.replace("fa-times","fa-bars");
    }

} 


//---------------------- window load -------------------------//

window.onload = (e) => { 
    loaderMode.style.opacity = "0";
    loaderMode.style.visibility = "hidden"; 
    content.classList.add("active"); 
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

   

//---------------------- hamburger function ------------------//

hamburger.addEventListener("click", () =>{
    nav.classList.toggle("active");  
    copyright.classList.toggle("active"); 

    if(hamburger.className === "hamburger fa fa-bars"){
         hamburger.classList.replace("fa-bars","fa-times"); 
    } else {
        hamburger.classList.replace("fa-times","fa-bars");
    }
})

