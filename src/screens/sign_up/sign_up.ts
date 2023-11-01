
import { inputsName } from "../../export";
console.log(inputsName);


export class app_singup extends HTMLElement {
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
      <link rel="stylesheet" href="/dist/sign_up/css/component.css">
      <section>
      <div id="back">
      <div id="white">
      <input-container></input-container>
      <p class="account"> If ypu already have an account <a>Sing in</a></p>
      </div>
      </div>
      </section>
      `;
    }
  }
}

customElements.define(`app-singup`, app_singup);

