import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";

export const enum image {
    img = "img",
    book = "book"
}

export default class carousel extends HTMLElement {

    properties: Record<image, string> = {
        img: "",
        book: ""
    }

    static get observedAttributes() {
        const properties: Record<image, null> = {
            img: null,
            book: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: image, oldValue: string, newValue: string) {
        switch (propName) {
            case image.img:
                this.properties.img = newValue
                break;
            case image.book:
                this.properties.book = newValue
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
            <img src="${this.properties.img}" alt="${this.properties.book}">
            </div>
            `;
            loadCss(this, styles);
        }
    }
}

customElements.define("welcome-carousel", carousel)