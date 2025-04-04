class ProjectCard extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Get attributes from the element or use defaults
        const title = this.getAttribute('title') || 'Project';
        const description = this.getAttribute('description') || 'This is one of my projects!';
        const projImg = this.getAttribute('projImg') || 'imgPath';
        const imgAlt = this.getAttribute('imgAlt') || 'pic of my project';
        const projURL = this.getAttribute('projURL') || 'github.com/aandyliu46';
            
        // Add styles with CSS for flip effect
        const style = document.createElement('style');
        style.textContent = `
            .card-container {
                width: 500px;
                height: 500px;
                perspective: 1000px;
                margin: auto;
            }
            
            .flip-card {
                width: 100%;
                height: 100%;
                position: relative;
                transition: transform 0.8s;
                transform-style: preserve-3d;
                cursor: pointer;
            }
            
            .card-container:hover .flip-card {
                transform: rotateY(180deg);
            }
            
            .front, .back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 25px;
                border: 0.25rem solid black;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            .front {
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            
            .front img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
            }
            
            .back {
                background-color: white;
                transform: rotateY(180deg);
                padding: 20px;
                justify-content: center;
            }

            .back a {
                display: inline-block;
                margin-top: 10px;
                padding: 10px 20px;
                font-size: 16px;
                color: white;
                background-color: #007bff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }

            .back a:hover {
                background-color: #0056b3;
            }
        `;
        
        const cardHTML = `
            <div class="card-container">
                <div class="flip-card">
                    <div class="front">
                        <img src="${projImg}" alt="${imgAlt}">
                    </div>
                    <div class="back" style="color:black">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <a href="${projURL}" target="_blank">GitHub Repo</a>
                    </div>
                </div>
            </div>
        `;
        
        this.shadowRoot.appendChild(style);
        const template = document.createElement('template');
        template.innerHTML = cardHTML;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);
