//------------------------ api for services -----------------------//

projects = [
    {
        "image": "../image/project.png",
        "images":[{"name":"adil"}],
        "title": "Web Developer",
        "descrition": "Development website to fit your business, blog, portfolio, or online store."

    },
    {
        "image": "../image/project2.png",
        "images":[],
        "title": "Web Design",
        "descrition": "We provide design of any website for your business, blog, portfolio or anything."

    }, 
    {
        "image": "../image/project4.png",
        "images":[],
        "title": "Responsive Design",
        "descrition": "Mix of flexible grids and layouts, images and an intelligent use of CSS media queries"

    },
    {
        "image": "../image/project5.png",
        "images":[],
        "title": "Wordpress",
        "descrition": "Provide any website to fit your business, blog, portfolio, or online store."

    }, 
    {
        "image": "../image/project2.png",
        "images":[],
        "title": "Hardware",
        "descrition": " I can take input from sensors, understand the data and do assigned tasks."

    }, 
    {
        "image": "../image/kdt2.png",
        "images":[],
        "title": "Hardware",
        "descrition": " I can take input from sensors, understand the data and do assigned tasks."

    }, 
];
 


projects.forEach(e => {  
 
        // document.getElementById("project-div").innerHTML += `
        // <div class="project" data-description="${e.descrition}" data-image="${e.image}" data-title="${e.title}"  onclick="showProject(this)">
        //     <img src="${e.image}" class="project-image" alt="">
        //     <div class="project-footer">`+
        //             e.images.forEach(i => {
        //                 document.write(i)
        //             })  +
        //         `<button>Veiw</button>
        //     </div>
        // </div>    
        // `; 


        document.getElementById("project-div").innerHTML += `
        <div class="project" data-description="${e.descrition}" data-image="${e.image}" data-title="${e.title}"  onclick="showProject(this)">
            <img src="${e.image}" class="project-image" alt="">
            <div class="project-footer">
                <h4>${e.title}</h4>
                <button>Veiw</button>
            </div>
        </div>    
        `; 




});


// function showProject(e){

//     document.getElementById("project-div").innerHTML = ` 
//     <div class="project" data-description="${e.getAttribute("data-description")}">
//     <img src="${e.getAttribute("data-image")}" class="project-image" alt="">
//     <div class="project-footer">
//         <h4>${e.getAttribute("data-title")}</h4>
//         <button>Veiw</button>
//     </div>
// </div>    
//     `;
// }

function filterProject(search){

    var  filter = search.value.toLowerCase();
    var projectDiv = document.getElementById("project-div");
    var project = projectDiv.getElementsByClassName("project"); 
    for(var i = 0; i < project.length; i++){
        
        
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