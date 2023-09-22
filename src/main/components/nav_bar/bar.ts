import "./profile/profile"
import "./search_bar/search"

class nav extends HTMLElement {
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
        <link rel="stylesheet" href="./main/css/nav.css">
        <nav>
            <img src="https://pbs.twimg.com/media/F6nSixaXYAA95BR?format=png&name=240x240" id="logo">
            <p>ABOUT US</p>
            <p>EXPLORE</p>
            <search-container></search-container>
            <profile-container></profile-container>
        </nav>
        `;
    }
  }
}
customElements.define("nav-container", nav);
export default nav;