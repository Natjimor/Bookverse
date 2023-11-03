import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import { addObserver, appState, dispatch } from "../../../store";
import { navigate } from "../../../store/acctions";
import { Screens } from "../../../types/navigation";

export default class landingDiscover extends HTMLElement {
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
        img.setAttribute("src","https://pbs.twimg.com/media/F9-6WHmWcAAhcL5?format=jpg&name=large")
        img.setAttribute("id", "img")
        img.setAttribute("alt","Jane Austen")
        this.appendChild(img)

        const tittle = this.ownerDocument.createElement("h2")
        tittle.textContent = "SEARCH YOUR FAVORITE BOOK"
        const message = this.ownerDocument.createElement("p")
        message.textContent = "What are you waiting for to get started? Just enter the name of your favorite book to read it digitally."

        const read = this.ownerDocument.createElement("button")
        read.innerText = "START READING NOW"
        read.classList.add("read")

        read.addEventListener(('click'), () =>{
          dispatch(navigate(Screens.sing_up))
       })

        divLeft.appendChild(img)
        divRight.appendChild(tittle)
        divRight.appendChild(message)
        divRight.appendChild(read)
        
        discover.appendChild(divLeft)
        discover.appendChild(divRight)

        this.shadowRoot.appendChild(discover)
      }
    }
  }
customElements.define("landing-discover", landingDiscover);