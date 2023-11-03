import "../../components/export"
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class landing extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=``
            loadCss(this, styles);

            const container = this.ownerDocument.createElement("section")

            const bar = this.ownerDocument.createElement("landing-bar")
            const carousel = this.ownerDocument.createElement("notice-container")
            const discover = this.ownerDocument.createElement("landing-discover")
            const favorite = this.ownerDocument.createElement("landing-favorite")
            const qoute = this.ownerDocument.createElement("landing-quote")
            const info = this.ownerDocument.createElement("landing-information")
            
            container.appendChild(bar)
            container.appendChild(carousel)
            container.appendChild(discover)
            container.appendChild(favorite)
            container.appendChild(qoute)
            container.appendChild(info)

            this.shadowRoot.appendChild(container)
        }
    }
}

customElements.define("landing-bookverse", landing)