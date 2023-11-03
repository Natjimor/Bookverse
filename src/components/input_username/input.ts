import { welcome, inputs, button } from "../export"; 
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class inputsName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

      const name = this.ownerDocument.createElement("p");
      name.textContent = `User name`;
      name.classList.add("inputsP");

      const user_name = this.ownerDocument.createElement("input");
      user_name.placeholder = `User name`;

      const div_inputs = this.ownerDocument.createElement("div");

      const welcome = this.ownerDocument.createElement(`welcome-container`);
      const inputs_email = this.ownerDocument.createElement(`inputs-container`);
      const btn = this.ownerDocument.createElement(`button-container`);

      
      div_inputs.appendChild(welcome);
      div_inputs.appendChild(name);
      div_inputs.appendChild(user_name);
      div_inputs.appendChild(inputs_email);
      div_inputs.appendChild(btn);
      
      loadCss(this, styles);
      this.shadowRoot.appendChild(div_inputs);
    }
  }
}

customElements.define(`input-container`, inputsName);

