//------------------------ api for services -----------------------//

projects = [
    {
        "image": "../image/project.png",
        "title": "Web Developer",
        "descrition": "Development website to fit your business, blog, portfolio, or online store."

    },
    {
        "image": "../image/project.png",
        "title": "Web Design",
        "descrition": "We provide design of any website for your business, blog, portfolio or anything."

    },
    {
        "image": "../image/project.png",
        "title": "Graphic Design",
        "descrition": "To solve problems and communicate ideas through typography, imagery, color and form"
    },
    {
        "image": "../image/project.png",
        "title": "Responsive Design",
        "descrition": "Mix of flexible grids and layouts, images and an intelligent use of CSS media queries"

    },
    {
        "image": "../image/project.png",
        "title": "Wordpress",
        "descrition": "Provide any website to fit your business, blog, portfolio, or online store."

    },
    {
        "image": "../image/project.png",
        "title": "Hardware",
        "descrition": " I can take input from sensors, understand the data and do assigned tasks."

    }, 
];


projects.forEach(e => {
    
    document.getElementById("project-div").innerHTML += `
    <div class="project" data-description="${e.descrition}">
        <img src="${e.image}" class="project-image" alt="">
        <div class="project-footer">
            <h4>${e.title}</h4>
            <button>Veiw</button>
        </div>
    </div>    
    `;

});
