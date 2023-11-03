import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class inputs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

      const p = this.ownerDocument.createElement("p");
      p.textContent = `Email`;
      p.classList.add("inputsP");

      const input_email = this.ownerDocument.createElement("input");
      input_email.classList.add("emailInput")
      input_email.placeholder = `Email adress`;

      const pas = this.ownerDocument.createElement("p");
      pas.textContent = `Password`;
      pas.classList.add("inputsP");

      const input_pass = this.ownerDocument.createElement("input");
      input_pass.classList.add("passwordInput")
      input_pass.placeholder = `password`;

      this.shadowRoot.appendChild(p);
      this.shadowRoot.appendChild(input_email);
      this.shadowRoot.appendChild(pas);
      this.shadowRoot.appendChild(input_pass);
      loadCss(this, styles);
    }
  }
}

customElements.define("inputs-container", inputs);
