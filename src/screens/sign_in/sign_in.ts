
import { inputs } from "../../components/inputs/inputs";
import { Welcome } from "../../components/welcome/welcome";
import { button } from "../../components/button_continue/continue";
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
        <link rel="stylesheet" href="/dist/sign_in/css/component.css">
        <section>
        <div id="back">
        <div id="white">
        <welcome-container></welcome-container>
        <inputs-container></inputs-container>
        <button-container></button-container>
        </div>
        </div>
        </section>
        `;
    }
  }
}

customElements.define(`sing-container`, sing_in);
