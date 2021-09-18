
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
