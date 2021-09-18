 

//--------------------- variable diclaration ---------------------//
  
var settingMainChild = document.getElementById("settingMainChild");  
var settingMain = document.getElementById("settingMain");   


//------------------ typing js --------------------//

var typed = new Typed('.type_text', {
strings: ["", " Web Developer", " Web Designer", "Programmer", "Student", "Freelancer"],
loop: true,
backSpeed: 30,
typeDelay: 1000,
cursorChar: '_',
typeSpeed: 100

});
 

//-------------------- change css file ----------------------//

function changeCssFile(e){
    localStorage.setItem("cssMode", e);
    customCss.href = e; 
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



