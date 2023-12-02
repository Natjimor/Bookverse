import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";
import { dispatch } from "../../../../store";
import firebase from "../../../../services/firebase";
import { getBook } from "../../../../services/firebase";
import { navigate } from "../../../../store/acctions";
import { showDetail } from "../../../../store/acctions";
import { Screens } from "../../../../types/navigation";

export const enum image {
    image = "image",
    name = "name",
    id = "id"
}

export default class carousel extends HTMLElement {

    properties: Record<image, string> = {
        image: "",
        name: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<image, null> = {
            image: null,
            name: null,
            id: null
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

            case image.id:
                this.properties.id = newValue
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
            `;
            const container = this.ownerDocument.createElement('div')
            container.classList.add("carousel-cell")

            const image = this.ownerDocument.createElement('img')
            image.setAttribute("src",this.properties.image)
            image.setAttribute("alt",this.properties.name)
            container.appendChild(image)
            this.shadowRoot.appendChild(container)
            loadCss(this, styles);

            image.addEventListener("click", async (book) => {
                    dispatch({ type: "VIEW_DETAIL", payload: book });
                    dispatch(navigate(Screens.pop));
                 
              });
        
        }
    }
}

customElements.define("welcome-carousel", carousel)