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
            localStorage.setItem(projectData, JSON.stringify(projectData))
        })
    }

    const projectData = JSON.parse(localStorage.getItem('projectData'))
    projectData.forEach(project => {
        
    });
    
}

function sendRemoteRequest() {

}