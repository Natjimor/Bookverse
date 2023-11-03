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

            const bar = this.ownerDocument.createElement("navigation-bar")
            const menu = this.ownerDocument.createElement("menu-container")
            const discover = this.ownerDocument.createElement("main-discover")
            const welcome = this.ownerDocument.createElement("main-welcome")
            const find = this.ownerDocument.createElement("main-find")
            
            this.shadowRoot.appendChild(bar)
            this.shadowRoot.appendChild(menu)
            this.shadowRoot.appendChild(discover)
            this.shadowRoot.appendChild(welcome)
            this.shadowRoot.appendChild(find)
        }
    }
}

customElements.define("main-bookverse", main)