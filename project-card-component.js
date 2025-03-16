class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get attributes from the element or use defaults
        const title = this.getAttribute('title') || 'Project';
        const description = this.getAttribute('description') || 'This is one of my projects!';
        const projImg = this.getAttribute('projImg') || 'imgPath';
        const imgAlt = this.getAttribute('imgAlt') || 'pic of my project';
        const projURL = this.getAttribute('projURL') || '#';
    
        const style = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: .25rem solid black;
            margin: auto;
            padding: 2rem;
            text-align: center;
        `;
        
        // const h3Style =`
        //     font-size: 1.3rem;
        // `;

        this.innerHTML = `
            <div style="${style}"> 
                <h3>${title}</h3>
                <picture><img src="${projImg}" alt="${imgAlt}" width ="500" height = "500"></picture>
                <p>${description}</p>
                <a href="${projURL}">GitHub Repo</a>
            </div>
        `;
    }
}

// Make sure the component name matches what you use in HTML
customElements.define('project-card', ProjectCard);