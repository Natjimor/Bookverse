import "../../components/export"
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

class main extends HTMLElement {
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

            const bar = this.ownerDocument.createElement("navigation-bar")
            const menu = this.ownerDocument.createElement("menu-container")
            const discover = this.ownerDocument.createElement("main-discover")
            
            container.appendChild(bar)
            container.appendChild(menu)
            container.appendChild(discover)

            this.shadowRoot.appendChild(container)
        }
    }
}

customElements.define("main-bookverse", main)