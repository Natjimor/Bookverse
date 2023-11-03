import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export default class mainFind extends HTMLElement {
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
        
        const find = this.ownerDocument.createElement("section")
        const container = this.ownerDocument.createElement("div")
        container.classList.add("container")

        const divR = this.ownerDocument.createElement("div")
        divR.setAttribute("id","box")
        find.appendChild(divR)

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src","https://cdn.kobo.com/book-images/5a42cde6-7bee-46d7-b3fb-55ffff1a3f09/353/569/90/False/by-the-pricking-of-my-thumbs.jpg")
        img.setAttribute("id", "img")
        img.setAttribute("alt","The murder of Roger Ackroyd")
        find.appendChild(img)

        const divL = this.ownerDocument.createElement("div")
        divL.classList.add("text")
        find.appendChild(divL)
        
        const tittle = this.ownerDocument.createElement("h2")
        tittle.textContent = "The murder of Roger Ackroyd"
        const message = this.ownerDocument.createElement("p")
        message.textContent = "Roger Ackroyd knew too much. He knew that the woman he loved had poisoned her brutal first husband. He suspected also that someone had been blackmailing her. Then, tragically, came the news that she had taken her own life with an apparent drug overdose. However the evening post brought Roger one last fatal scrap of information, but before he could finish reading the letter, he was stabbed to death. Luckily one of Roger's friends and the newest resident to retire to this normally quiet village takes over—none other than Monsieur Hercule Poirot."
        find.appendChild(tittle)
        find.appendChild(message)

        this.shadowRoot.appendChild(find)
      }
    }
  }
customElements.define("main-find", mainFind);