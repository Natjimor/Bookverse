import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/acctions";
import { Screens } from "../../../types/navigation";

export default class landing_bar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        loadCss(this, styles);
        
        const navBar = this.ownerDocument.createElement("nav")
        const divLeft = this.ownerDocument.createElement("div")
        divLeft.classList.add("Left")
        const divRight = this.ownerDocument.createElement("div")
        divRight.classList.add("Right")

        const logo = this.ownerDocument.createElement("img")
        logo.setAttribute("src","https://pbs.twimg.com/media/F99DQ4dWMAA6lgE?format=png&name=medium")
        logo.setAttribute("id", "logo")
        logo.setAttribute("alt","Bookverse")
        this.appendChild(logo)

        const about = this.ownerDocument.createElement("p")
        about.textContent = "ABOUT US"
        const support = this.ownerDocument.createElement("p")
        support.textContent = "SUPPORT"

        const signIn = this.ownerDocument.createElement("button")
        signIn.innerText = "SIGN IN"
        signIn.classList.add("signIn")

        signIn.addEventListener(('click'), () =>{
            dispatch(navigate(Screens.sing_in))
         })


        const signUp = this.ownerDocument.createElement("button")
        signUp.innerText = "SIGN UP"
        signUp.classList.add("signUp")

        signUp.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.sing_up))
       })

        divLeft.appendChild(logo)
        divLeft.appendChild(about)
        divLeft.appendChild(support)
        divRight.appendChild(signIn)
        divRight.appendChild(signUp)
        
        navBar.appendChild(divLeft)
        navBar.appendChild(divRight)

        this.shadowRoot.appendChild(navBar)
      }
    }
  }
customElements.define("landing-bar", landing_bar);