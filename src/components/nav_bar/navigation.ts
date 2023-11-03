import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import "./menu/menu"
import profile from "./profile/profile";
console.log(profile)

export default class navigationBar extends HTMLElement {
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
        const explore = this.ownerDocument.createElement("p")
        explore.textContent = "EXPLORE"
        const support = this.ownerDocument.createElement("p")
        support.textContent = "SUPPORT"

        const profile = this.ownerDocument.createElement('profile-container')

        divLeft.appendChild(logo)
        divLeft.appendChild(explore)
        divLeft.appendChild(about)
        divLeft.appendChild(support)
        divRight.appendChild(profile)
        
        navBar.appendChild(divLeft)
        navBar.appendChild(divRight)

        this.shadowRoot.appendChild(navBar)
      }
    }
  }
customElements.define("navigation-bar", navigationBar);