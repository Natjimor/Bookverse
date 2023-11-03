import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export default class landingFavorite extends HTMLElement {
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
        
        const discover = this.ownerDocument.createElement("section")
        const divLeft = this.ownerDocument.createElement("div")
        divLeft.classList.add("Left")
        const divRight = this.ownerDocument.createElement("div")
        divRight.classList.add("Right")

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src","https://pbs.twimg.com/media/F9_CMIEXAAAzB-q?format=jpg&name=large")
        img.setAttribute("id", "img")
        img.setAttribute("alt","Classics")
        this.appendChild(img)

        const tittle = this.ownerDocument.createElement("h2")
        tittle.textContent = "SAVE YOUR FAVORITE BOOKS"
        const message = this.ownerDocument.createElement("p")
        message.textContent = "Collect your favorite books to read later."

        const read = this.ownerDocument.createElement("button")
        read.innerText = "START READING NOW"
        read.classList.add("read")

        divLeft.appendChild(tittle)
        divLeft.appendChild(message)
        divLeft.appendChild(read)
        divRight.appendChild(img)
        
        discover.appendChild(divLeft)
        discover.appendChild(divRight)

        this.shadowRoot.appendChild(discover)
      }
    }
  }
customElements.define("landing-favorite", landingFavorite);