class ProjectCard extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        // remember to add flex to the style.
        const style = `
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: fit-content;
            border: .25rem solid black;
            margin: auto;
            padding: 2rem;
            text-align: center;
            width: 50vw;
        `;
        
        const h3Style =`
            font-size: 1.3rem;
        `;

        this.innerHTML= `
            <div style="${style}"> 
            <h3 style="${h3Style}"> Project: </h3>
            <picture> </picture>
            <p> </p>
            <a href = >
            </div>
            `
    }
}

CustomElementRegistry.define('project-card', ProjectCard)