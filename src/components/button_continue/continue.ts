import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";

export class button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

 async render() {
    if (this.shadowRoot) {
      const css = this.ownerDocument.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("href", "/dist/sign_in/css/component.css");
      this.shadowRoot.appendChild(css);

      const btn = this.ownerDocument.createElement("button");
      btn.textContent = `Continue`;

      btn?.addEventListener(('click'), () =>{
        dispatch(navigate(Screens.sing_in))
      })
      this.shadowRoot.appendChild(btn);
    }
  }
}

customElements.define("button-container", button);

