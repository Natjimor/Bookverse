import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation"; 
import { inputs, Welcome} from "../../components/export";
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
console.log(inputs, Welcome);


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

    const welcome = this.ownerDocument.createElement(`welcome-container`)

    const section = this.ownerDocument.createElement("section")
    const div =  this.ownerDocument.createElement("div")
    div.classList.add("back")

    const whiteDiv = this.ownerDocument.createElement("div")
    whiteDiv.classList.add("white")

    const inputs = this.ownerDocument.createElement(`inputs-container`)

    const divP =  this.ownerDocument.createElement("div")
    divP.classList.add("link")
    const p = this.ownerDocument.createElement("p")
    p.textContent = `If you already have an account`
    p.classList.add("account")

    const a = this.ownerDocument.createElement("a")
    a.textContent = `Sing in`
    a.classList.add("account")
    a.addEventListener(('click'), () =>{
        dispatch(navigate(Screens.sing_in))
       })

    whiteDiv.appendChild(welcome)
    whiteDiv.appendChild(inputs)
    divP.appendChild(p)
    divP.appendChild(a)
    whiteDiv.appendChild(divP)
    div.appendChild(whiteDiv)
    section.appendChild(div)
    this.shadowRoot.appendChild(section)
    

      // this.shadowRoot.innerHTML = `
      // <section>
      // <div id="back">
      // <div id="white">
      // <input-container></input-container>
      // <p class="account"> If ypu already have an account <a>Sing in</a></p>
      // </div>
      // </div>
      // </section>
      // `
      loadCss(this, styles);
    }
  }
}

customElements.define(`app-singup`, app_singup);

