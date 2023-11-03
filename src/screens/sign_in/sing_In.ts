
import { inputs, welcome } from "../../components/export";
import { button } from "../../components/button_continue/continue";
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
console.log(inputs, welcome, button);
console.log("help");


export class sing_in extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section>
        <div id="back">
        <div id="white">
        <welcome-container></welcome-container>
        <inputs-container></inputs-container>
        <button-container></button-container>
        </div>
        </div>
        </section>
        `
        loadCss(this, styles);
    }
  }
}

customElements.define(`sing-container`, sing_in);
