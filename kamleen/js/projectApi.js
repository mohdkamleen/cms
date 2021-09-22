//------------------------ api for services -----------------------//

projects = [
    {
        "icon": "fa-html5",
        "title": "Web Developer",
        "descrition": "Development website to fit your business, blog, portfolio, or online store."

    },
    {
        "icon": "fa-code",
        "title": "Web Design",
        "descrition": "We provide design of any website for your business, blog, portfolio or anything."

    },
    {
        "icon": "fa-paint-brush",
        "title": "Graphic Design",
        "descrition": "To solve problems and communicate ideas through typography, imagery, color and form"
    },
    {
        "icon": "fa-mobile",
        "title": "Responsive Design",
        "descrition": "Mix of flexible grids and layouts, images and an intelligent use of CSS media queries"

    },
    {
        "icon": "fa-wordpress",
        "title": "Wordpress",
        "descrition": "Provide any website to fit your business, blog, portfolio, or online store."

    },
    {
        "icon": "fa-microchip",
        "title": "Hardware",
        "descrition": " I can take input from sensors, understand the data and do assigned tasks."

    }, 
];


projects.forEach(e => {
    
    document.getElementById("project-div").innerHTML += `
    <div class="project" data-description="${e.descrition}">
        <img src="../image/project.png" class="project-image" alt="">
        <div class="project-footer">
            <h4>${e.title}</h4>
            <button>Veiw</button>
        </div>
    </div>    
    `;

});
