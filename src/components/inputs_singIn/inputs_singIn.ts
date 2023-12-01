import styles from "./styles.css";
import { loadCss } from "../../utils/styles";
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";
import { getUsers } from "../../services/firebase";


export class inputs_singIn extends HTMLElement {
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
        user_name.placeholder = `User name`;
  
        const p = this.ownerDocument.createElement("p");
        p.textContent = `Email`;
        p.classList.add("inputsP");
  
        const input_email = this.ownerDocument.createElement("input");
        input_email.classList.add("emailInput");
        input_email.placeholder = `Email adress`;
  
        const pas = this.ownerDocument.createElement("p");
        pas.textContent = `Password`;
        pas.classList.add("inputsP");
  
        const input_pass = this.ownerDocument.createElement("input");
        input_pass.classList.add("passwordInput");
        input_pass.type = "password"
        input_pass.placeholder = `password`;
  
        const btn = this.ownerDocument.createElement("button");
        btn.classList.add("btnContinue");
        btn.textContent = `Continue`;
        btn.addEventListener("click", async() =>{

          try {
            const email = input_email.value;
            const password = input_pass.value;
            const user = await getUsers(email, password);
            if (user) {
              dispatch(navigate(Screens.main));
  
            } else {
              console.error("Error al obtener el usuario");
    
            }
          } catch (error) {
            console.error("Error al iniciar sesión:", error);
          }
          input_email.value = "";
          input_pass.value = "";
        })
              
        this.shadowRoot.appendChild(p);
        this.shadowRoot.appendChild(input_email);
        this.shadowRoot.appendChild(pas);
        this.shadowRoot.appendChild(input_pass);
        this.shadowRoot.appendChild(btn);
        loadCss(this, styles);
      }
    }
  }
  
  customElements.define("sing-inputs", inputs_singIn);
  