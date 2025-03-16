class ProjectCard extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const style = `
            border: .25rem solid black;
            margin: auto;
            padding: 2rem;
            text-align: center;
            width: 50vw;
        `;
        
        this.innerHTML= ''
    }
}

CustomElementRegistry.define('project-card', ProjectCard)