class ProjectCard extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        // attributes
        const description = 'This is one of my projects!';
        const projImg = 'imgPath';
        const imgAlt = 'pic of my project';
        const projURL = 'github/aandyliu46';
    
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
        
        // const h3Style =`
        //     font-size: 1.3rem;
        // `;

        this.innerHTML= `
            <div style="${style}"> 
            <h3> Project: </h3>
            <picture> <img src="${projImg}" alt="${imgAlt}"> </picture>
            <p> ${description}</p>
            <a href = ${projURL}>Click Here to See More!</a>
            </div>
            `
    }
}

customElements.define('project-card', ProjectCard)