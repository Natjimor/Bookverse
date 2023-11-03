import "../../components/export"
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class main extends HTMLElement {
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

            const bar = this.ownerDocument.createElement("nav-container")
            const menu = this.ownerDocument.createElement("menu-container")
            const discover = this.ownerDocument.createElement("main-discover")
            const welcome = this.ownerDocument.createElement("main-welcome")
            
            container.appendChild(bar)
            container.appendChild(menu)
            container.appendChild(discover)
            container.appendChild(welcome)

            this.shadowRoot.appendChild(container)
        }
    }
}

customElements.define("main-bookverse", main)