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
      const css = this.ownerDocument.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("href", "/dist/sign_in/css/component.css");
      this.shadowRoot.appendChild(css);

      const p = this.ownerDocument.createElement("p");
      p.textContent = `Email`;
      p.classList.add("inputsP");

      const input_email = this.ownerDocument.createElement("input");
      input_email.placeholder = `Email adress`;

      const pas = this.ownerDocument.createElement("p");
      pas.textContent = `Password`;
      pas.classList.add("inputsP");

      const input_pass = this.ownerDocument.createElement("input");
      input_pass.placeholder = `password`;

      this.shadowRoot.appendChild(p);
      this.shadowRoot.appendChild(input_email);
      this.shadowRoot.appendChild(pas);
      this.shadowRoot.appendChild(input_pass);
    }
  }
}

customElements.define("inputs-container", inputs);
