import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export const enum image {
    img = "img",
    book = "book",
    text = "text",
    button = "button"
}

export default class carousel extends HTMLElement {

    properties: Record<image, string> = {
        img: "",
        book: "",
        text: "",
        button: ""
    }

    static get observedAttributes() {
        const properties: Record<image, null> = {
            img: null,
            book: null,
            text: null,
            button: null
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

            case image.text:
                this.properties.text = newValue
                break;
                
            case image.button:
                this.properties.button = newValue
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
            <div class= "text">
            <h2>${this.properties.text}</h2>
            <button>${this.properties.button}</button>
            </div>
            `;
            loadCss(this, styles);
        }
    }
}

customElements.define("landing-carousel", carousel)