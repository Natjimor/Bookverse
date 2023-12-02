import styles from "./styles.css";
import { loadCss } from "../../utils/styles";
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";
import firebase, { saveUser } from "../../services/firebase";


export class inputs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) {
      const name = this.ownerDocument.createElement("p");
      name.textContent = `User name`;
      name.classList.add("inputsP");

      const user_name = this.ownerDocument.createElement("input");
      user_name.placeholder = `Write your user name`;

      const p = this.ownerDocument.createElement("p");
      p.textContent = `Email`;
      p.classList.add("inputsP");

      const input_email = this.ownerDocument.createElement("input");
      input_email.classList.add("emailInput");
      input_email.placeholder = `Write your email adress`;

      const pas = this.ownerDocument.createElement("p");
      pas.textContent = `Password`;
      pas.classList.add("inputsP");

      const input_pass = this.ownerDocument.createElement("input");
      input_pass.classList.add("passwordInput");
      input_pass.type = "password"
      input_pass.placeholder = `Write your password`;

      const btn = this.ownerDocument.createElement("button");
      btn.classList.add("btnContinue");
      btn.textContent = `Continue`;

      btn.addEventListener("click", () => {
        if (
          input_email.value.trim() !== ""
          && user_name.value.trim() !== ""
          && input_email.value.includes("@")
        ) {
            saveUser(user_name.value,input_email.value, input_pass.value );
            dispatch(navigate(Screens.main))
            console.log("Usuario reguistrado exitosamente");
        } else {
          alert("Por favor, ingrese un datos válidos.");
        }
        input_email.value = "";
        input_pass.value = "";
        user_name.value = ""});


      this.shadowRoot.appendChild(name);
      this.shadowRoot.appendChild(user_name);
      this.shadowRoot.appendChild(p);
      this.shadowRoot.appendChild(input_email);
      this.shadowRoot.appendChild(pas);
      this.shadowRoot.appendChild(input_pass);
      this.shadowRoot.appendChild(btn);
      loadCss(this, styles);
    }
  }
}

customElements.define("inputs-container", inputs);
