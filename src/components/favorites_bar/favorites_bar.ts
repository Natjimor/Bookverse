import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";

export class bar_library extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

      const div = this.ownerDocument.createElement("div");
      div.classList.add("fondoBar");

      const lib = this.ownerDocument.createElement("h3");
      lib.textContent = "Library";

      const btn = this.ownerDocument.createElement("button");
      btn.textContent = `Profile settings`;

      btn.addEventListener("click", ()=>{
        dispatch(navigate(Screens.settings))
      })

      div.appendChild(lib);
      div.appendChild(btn);
      this.shadowRoot.appendChild(div);
      loadCss(this, styles);
    }
  }
}

customElements.define("barlib-container", bar_library);
