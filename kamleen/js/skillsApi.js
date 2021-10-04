
var skillsDiv = document.getElementsByClassName("skills-div")[0];  

//------------------------ api for services -----------------------//

skills = [
    {
        "language": "html",
        "persent": "90%" 

    }, 
    {
        "language": "css",
        "persent": "80%" 

    }, 
    {
        "language": "js",
        "persent": "80%" 

    }, 
    {
        "language": "mysql",
        "persent": "70%" 

    }, 
    {
        "language": "php",
        "persent": "80%" 

    }, 
    {
        "language": "python",
        "persent": "80%" 

    }, 
    {
        "language": "arduino",
        "persent": "95%" 

    }, 
    {
        "language": "wordpress",
        "persent": "80%" 

    }, 
    {
        "language": "Firebase",
        "persent": "95%" 

    }, 
    {
        "language": "Node.js",
        "persent": "70%" 

    }, 
];


skills.forEach(e => {
    
    skillsDiv.innerHTML += `
            <div class="skill">
                <div class="skill-title">${e.language}</div>
                <div class="skill-position" data-persent="${e.persent}"></div>
            </div> 
    `;

});
