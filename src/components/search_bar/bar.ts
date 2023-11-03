import "./nav_bar/profile/profile"
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class nav extends HTMLElement {
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
        <nav>
            <img src="https://pbs.twimg.com/media/F6nSixaXYAA95BR?format=png&name=240x240" id="logo">
            <p>ABOUT US</p>
            <p>EXPLORE</p>
            <profile-container></profile-container>
        </nav>
        ` 
        loadCss(this, styles);
    }
  }
}
customElements.define("nav-container", nav);
