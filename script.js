window.addEventListener('DOMContentLoaded', function(){

    initLocalData()
    this.document.getElementById("localButton").addEventListener('click', function () { sendRequest});
    
    this.document.getElementById("remoteButton").addEventListener('click', function () {sendRequest});

});

function initLocalData() {
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