import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export default class landingInfo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        loadCss(this, styles);
        
        const information = this.ownerDocument.createElement("section")
        const div = this.ownerDocument.createElement("div")

        const conditions = this.ownerDocument.createElement("p")
        conditions.textContent = "Conditions"
        const privacy = this.ownerDocument.createElement("p")
        privacy.textContent = "Privacy"
        const accessibility = this.ownerDocument.createElement("p")
        accessibility.textContent = "Accessibility"
        const help = this.ownerDocument.createElement("p")
        help.textContent = "Help"
        const rights = this.ownerDocument.createElement("p")
        rights.textContent = "© 2023 Bookverse"

        div.appendChild(conditions)
        div.appendChild(privacy)
        div.appendChild(accessibility)
        div.appendChild(help)
        div.appendChild(rights)
        information.appendChild(div)

        this.shadowRoot.appendChild(information)
      }
    }
  }
customElements.define("landing-information", landingInfo);