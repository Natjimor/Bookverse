import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";
import { inputs, inputsName } from "../export"; 
import { user } from "../../services/firebase";
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";


export class button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``
      loadCss(this, styles);
      const btn = this.ownerDocument.createElement("button");
      btn.classList.add("btnContinue")
      btn.textContent = `Continue`;

      
       btn.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.main))
       })
      this.shadowRoot.appendChild(btn);
    }
  }
}

customElements.define("button-container", button);

