import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";

export const enum image {
    image = "image",
    name = "name"
}

export default class carousel extends HTMLElement {

    properties: Record<image, string> = {
        image: "",
        name: ""
    }

    static get observedAttributes() {
        const properties: Record<image, null> = {
            image: null,
            name: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: image, oldValue: string, newValue: string) {
        switch (propName) {
            case image.image:
                this.properties.image = newValue
                break;
            case image.name:
                this.properties.name = newValue
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
            <div class="carousel-cell">
            <img src="${this.properties.image}" alt="${this.properties.name}">
            </div>
            `;
            loadCss(this, styles);
        }
    }
}

customElements.define("welcome-carousel", carousel)