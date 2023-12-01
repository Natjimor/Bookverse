
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation"; 
import  "../../components/export";
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
console.log("help");


export class sing_in extends HTMLElement {
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

    const inputs = this.ownerDocument.createElement(`sing-inputs`)

    const divP =  this.ownerDocument.createElement("div")
    divP.classList.add("link")
    const p = this.ownerDocument.createElement("p")
    p.textContent = `If you already have an account`
    p.classList.add("account")

    const a = this.ownerDocument.createElement("a")
    a.textContent = `Sing up`
    a.classList.add("account")
    a.addEventListener(('click'), () =>{
       dispatch(navigate(Screens.sing_up))
       })

    whiteDiv.appendChild(welcome)
    whiteDiv.appendChild(inputs)
    divP.appendChild(p)
    divP.appendChild(a)
    whiteDiv.appendChild(divP)
    div.appendChild(whiteDiv)
    section.appendChild(div)
    this.shadowRoot.appendChild(section)
    loadCss(this, styles);
    }
  }
}

customElements.define(`sing-container`, sing_in);
