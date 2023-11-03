import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class Welcome extends HTMLElement {
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
        <div>
        <img src="https://pbs.twimg.com/media/F6nSixaXYAA95BR?format=png&name=240x240" id="img">
        <p id="welcome">Welcome to Bookverse</p>
        </div>
        `
        loadCss(this, styles);
    }
  }
}

customElements.define(`welcome-container`, Welcome);

