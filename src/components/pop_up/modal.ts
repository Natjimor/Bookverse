import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export const enum bookProps {
    name = "name",
    Author = "Author",
    synopsis = "synopsis",
    image = "image"
}

export default class pop extends HTMLElement {

    properties: Record<bookProps, string> = {
        name: "",
        Author: "",
        synopsis: "",
        image: ""
    }

    static get observedAttributes() {
        const properties: Record<bookProps, null> = {
            name: null,
            Author: null,
            synopsis: null,
            image: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: bookProps, oldValue: string, newValue: string) {
        switch (propName) {
            case bookProps.name:
                this.properties.name = newValue
                break;
            case bookProps.Author:
                this.properties.Author = newValue
                break;

            case bookProps.synopsis:
                this.properties.synopsis = newValue
                break;
                
            case bookProps.image:
                this.properties.image = newValue
                break;

            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                <div class= "Back">
                    <div class="container">
                        <div class = "image">
                        <img src="${this.properties.image}" alt="${this.properties.name}">
                        </div>
                        <div>
                        <h3>${this.properties.name}</h3>
                        <p>${this.properties.Author}</p>
                        <button id="Read">Read</button>
                        <button id="add">t</button>
                        <p>${this.properties.synopsis}</p>
                        </div>
                        <p>X</p>
                    </div>
                </div>
            </section>
            `;
            loadCss(this, styles);
        }
    }
}

customElements.define("pop-container", pop)