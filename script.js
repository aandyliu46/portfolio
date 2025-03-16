window.addEventListener('DOMContentLoaded', function(){

    // initLocalData()
    this.document.getElementById("localButton").addEventListener('click', function () { sendLocalRequest});
    
    this.document.getElementById("remoteButton").addEventListener('click', function () {sendRemoteRequest});

});

function sendLocalRequest() {
    if (localStorage.getItem('projectData') == null) {
        fetch('db.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(projectData => {
            localStorage.setItem(projectData, JSON.stringify(projectData));
        })
    }

    const projectData = JSON.parse(localStorage.getItem('projectData'));
    let fullStack = document.getElementById('fullstackProjects');
    let embedded = document.getElementById('embeddedProjects');
    fullStack.innerHTML = '';
    embedded.innerHTML = '';

    projectData.forEach(project => {
        const projectCard = createProjectCard(project)
        if (project.type == "Fullstack") {
            // organiztion can be done by doing flex layout on the section..
            fullStack.appendChild(projectCard)
        }
        else if (project.type == "EmbeddedSystems") {
            embedded.appendChild(projectCard)
        }
        else {
            console.log("wrong type")
        }
    });
    
}

function sendRemoteRequest() {

}

// creating projectCard
function createProjectCard(project) {
    const card = document.createElement('project-card');
    // pass in attributes
    const title = project.title;
    const description = project.description
    const projImg = project.projImg
    const projURL = project.projURL
    card.setAttribute("title", title)
    card.setAttribute("description", description)
    card.setAttribute("projImg", projImg)
    card.setAttribute("projURL", projURL)
    return card;
  }