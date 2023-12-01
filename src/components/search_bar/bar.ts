import "./nav_bar/profile/profile"
import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/acctions";
import { Screens } from "../../types/navigation";

export class nav extends HTMLElement {
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

      const navBar = this.ownerDocument.createElement("nav")
      const divLeft = this.ownerDocument.createElement("div")
      divLeft.classList.add("Left")
      const divRight = this.ownerDocument.createElement("div")
      divRight.classList.add("Right")

      const logo = this.ownerDocument.createElement("img")
      logo.setAttribute("src","https://pbs.twimg.com/media/F99DQ4dWMAA6lgE?format=png&name=medium")
      logo.setAttribute("id", "logo")
      logo.setAttribute("alt","Bookverse")
      divLeft.appendChild(logo)

      const about = this.ownerDocument.createElement("p")
      about.textContent = "ABOUT US"
      const explore = this.ownerDocument.createElement("p")
      explore.textContent = "EXPLORE"
      divLeft.appendChild(about)
      divLeft.appendChild(explore)

      const user = this.ownerDocument.createElement("profile-container")
      user.classList.add("user")
      divRight.appendChild(user)

      
      navBar.appendChild(divLeft)
      navBar.appendChild(divRight)

      this.shadowRoot.appendChild(navBar)
    }
  }
}
customElements.define("nav-container", nav);

