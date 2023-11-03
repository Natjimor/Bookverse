import { inputsName } from "../../components/export";
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
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
      <section>
      <div id="back">
      <div id="white">
      <input-container></input-container>
      <p class="account"> If ypu already have an account <a>Sing in</a></p>
      </div>
      </div>
      </section>
      `
      loadCss(this, styles);
    }
  }
}

customElements.define(`app-singup`, app_singup);

