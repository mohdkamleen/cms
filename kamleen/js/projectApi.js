//------------------------ api for services -----------------------//

projects = [
    {
        "image": "../image/training.png", 
        "image1": "../image/training1.png", 
        "date": "20 June 2020",
        "technologies": "C, HTML, CSS, Bootstrap, JavaScript, MySQL, Python, CGI, Database Connectivity, AJAX, JSON,Firebase. ",
        "team": "Mohd Kamleen",
        "url": "https://training-ac143.web.app/", 
        "title": "Training Project",
        "descrition": "There is a lot to gain from building projects as a Python developer. Choosing a Project Platform."

    },
    {
        "image": "../image/kdt.png", 
        "image1": "../image/kdt1.png", 
        "date": "20 June 2020",
        "technologies": "HTML, CSS, Jquery, Bootstrap, Firebase, Arduino, Sensors, Actuators etc",
        "team": "Mohd Kamleen, Daniyal, Mohd Tabish",
        "url": "https://kdt-143.web.app/",
        "title": "Arduino Project",
        "descrition": "This project is a small car based on Arduino platform which can be controlled using Bluetooth and a Android app. "

    }, 
    {
        "image": "../image/phpbb.png", 
        "image1": "../image/phpbb1.png", 
        "date": "01 Jun 2020",
        "technologies": "PHP, Website Design, vBulletin, MySQL, HTML",
        "team": "Mohd Kamleen",
        "url": "https://www.hastayasor.com/",
        "title": "phpbb",
        "descrition": "PhpBB 3.3.8 script and Turkish language pack should be installed."

    }, 
    {
        "image": "../image/cms.png", 
        "image1": "../image/cms1.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js, Firebase",
        "team": "Mohd Kamleen",
        "url": "https://mohdkamleen.github.io/cms/",
        "title": "CMS",
        "descrition": "This cms for my personal information database at firebase you can also use this easly."

    }, 
    {
        "image": "../image/live-chat.png", 
        "image1": "../image/live-chat1.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js, firebase",
        "team": "Mohd Kamleen",
        "url": "https://mohd-e4f8e.web.app/",
        "title": "Chat app",
        "descrition": "This chat app for communicating with friends from chat group."

    },
    {
        "image": "../image/infoware.png", 
        "image1": "../image/infoware.png", 
        "date": "15 Nov 2020",
        "technologies": "Html, Css, Js, Node.js, Mysql",
        "team": "Mohd Kamleen",
        "url": "http://127.0.0.1/",
        "title": "Ecommers",
        "descrition": " This project are represented for shopping ecommers website made for Infoware company."

    },  
    {
        "image": "../image/calculator.png", 
        "image1": "../image/calculator.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js",
        "team": "Mohd Kamleen",
        "url": "https://calculator-1027e.web.app/",
        "title": "Calculator",
        "descrition": "Responsive calculator made from html css js. This is pwa also you can also use offline mode."

    }, 
    {
        "image": "../image/hardware.png", 
        "image1": "../image/hardware.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js",
        "team": "Mohd Kamleen",
        "url": "http://127.0.0.1/",
        "title": "Hardware",
        "descrition": " I can take input from sensors, understand the data and do assigned tasks."

    }, 
    {
        "image": "../image/portfolio.png", 
        "image1": "../image/portfolio1.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js",
        "team": "Mohd Kamleen",
        "url": "https://mohd-kamleen.web.app/",
        "title": "Portfolio",
        "descrition": "This is my professional portfolio account for showing all projects and my profile also."

    },
    {
        "image": "../image/chat-gui.png", 
        "image1": "../image/chat-gui.png", 
        "date": "20 June 2020",
        "technologies": "Html, Css, Js",
        "team": "Mohd Kamleen",
        "url": "https://mohdkamleen.github.io/chat/",
        "title": "Chat app",
        "descrition": "This is graphic user interface of chat section its only static."

    },
    {
        "image": "../image/responsive-design.png", 
        "image1": "../image/responsive-design1.png", 
        "date": "20 June 2021",
        "technologies": "Html, Css, Js",
        "team": "Mohd Kamleen",
        "url": "https://mohd-kamleen.web.app/about",
        "title": "Responsive Design",
        "descrition": "Mix of flexible grids and layouts, images and an intelligent use of CSS media queries"

    },
    {
        "image": "../image/cms-localhost.png", 
        "image1": "../image/cms-localhost1.png", 
        "date": "20 June 2021",
        "technologies": "Html, Css, Js, Php, Ajax",
        "team": "Mohd Kamleen",
        "url": "http://127.0.0.1/",
        "title": "CMS",
        "descrition": "This cms for store information in local database. Its work on server side."

    },
    {
        "image": "../image/motor.png", 
        "image1": "../image/motor.png", 
        "date": "20 June 2020",
        "technologies": "HTML, CSS, Jquery, Bootstrap, Firebase, Arduino, Sensors, Actuators etc",
        "team": "Mohd Kamleen, Daniyal, Mohd Tabish",
        "url": "https://mohdkamleen.github.io/job/motor/",
        "title": "Arduino Project",
        "descrition": "This project is a small car based on Arduino platform which can be controlled using Bluetooth and a Android app. "

    }, 
    {
        "image": "../image/getart.png", 
        "image1": "../image/getart.png", 
        "date": "15 Nov 2020",
        "technologies": "Html, Css, Js, Node.js, Mysql",
        "team": "Mohd Kamleen",
        "url": "http://127.0.0.1/",
        "title": "Ecommers",
        "descrition": " This project are represented for shopping ecommers website made for GetArt company."

    }, 
];
 


projects.forEach(e => {    
        document.getElementById("project-div").innerHTML += `
        <div class="project" data-description="${e.descrition}">
            <img src="${e.image}" class="project-image" alt="">  
            <div class="project-footer">
                <h4>${e.title}</h4> 
                <button  data-description="${e.descrition}" data-image="${e.image}" data-image1="${e.image1}" data-title="${e.title}" data-date="${e.date}" data-technologies="${e.technologies}" data-team="${e.team}" data-url="${e.url}" onclick="showProject(this)">Veiw</button>
            </div>
        </div>    

        `;  
}); 


function showProject(e){  

    document.getElementsByClassName("search-bar")[0].style.display = 'none';

    document.getElementById("project-div").innerHTML = `

    <div class="show-project">

        <div class="header">
            <h4>${e.getAttribute("data-title")}</h4>
            <button onclick="location.reload()">Hide</button>
        </div>

        <div class="project-details">
            <p>${e.getAttribute("data-description")}</p>
            <p><b> Created &nbsp;</b> ${e.getAttribute("data-date")}</p>
            <p><b> Environment  &nbsp;</b> ${e.getAttribute("data-technologies")}</p>
            <p><b> Team  &nbsp;</b> ${e.getAttribute("data-team")}</p>  
            <p><b> Url  &nbsp;</b> <a href="${e.getAttribute("data-url")}" target="blank">${e.getAttribute("data-url")}</a></p> 
        </div> 
        <img src="${e.getAttribute("data-image1")}" class="project-image" alt="" onclick="window.location.href=this.src"> 
            
    </div> 
`;   
} 


function filterProject(search){ 

    var  filter = search.value.toLowerCase();
    var projectDiv = document.getElementById("project-div");
    var project = projectDiv.getElementsByClassName("project"); 
    
    for(var i = 0; i < project.length; i++){ 
        project[i].style.transform = "scale(1)";
        
        var projectFooter = project[i].getElementsByClassName("project-footer");

        for(var j = 0; j< projectFooter.length; j++){

            var h4 = projectFooter[j].getElementsByTagName("h4"); 

            for(var k = 0; k < h4.length; k++){
                console.log(h4[k].innerHTML.toLowerCase())

                if(h4[k].innerHTML.toLowerCase().indexOf(filter) > - 1){ 

                    project[i].style.display = 'block';  

                } else { 

                    project[i].style.display = 'none'; 

                } 
            } 
        } 
    }
}