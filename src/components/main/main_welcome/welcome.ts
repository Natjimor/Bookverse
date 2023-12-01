import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import classic from "./classics/classics"
import drama from "./drama/drama"
console.log(classic)
console.log(drama)

export default class welcome extends HTMLElement {
    
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

        const welcomeSection = this.ownerDocument.createElement("section")

        const containerText = this.ownerDocument.createElement("div")
        containerText.classList.add("textContainer")
        const welcome = this.ownerDocument.createElement("h2")
        welcome.textContent = "Welcome Home"
        const hr = this.ownerDocument.createElement("hr")
        containerText.appendChild(welcome)
        containerText.appendChild(hr)
        welcomeSection.appendChild(containerText)

        const containerCarousel = this.ownerDocument.createElement("div")
        containerCarousel.classList.add("cauroselContainer")

        const classics = this.ownerDocument.createElement("h3")
        classics.textContent = "Classics"
        containerCarousel.appendChild(classics)

        const carouselclassics = this.ownerDocument.createElement("classic-carousel")
        containerCarousel.appendChild(carouselclassics)

        const containerCarousel2 = this.ownerDocument.createElement("div")
        containerCarousel2.classList.add("cauroselContainer2")

        const drama = this.ownerDocument.createElement("h3")
        drama.textContent = "Drama"
        containerCarousel2.appendChild(drama)

        const carouseldrama = this.ownerDocument.createElement("drama-carousel")
        containerCarousel2.appendChild(carouseldrama)


        welcomeSection.appendChild(containerCarousel)
        welcomeSection.appendChild(containerCarousel2)
        this.shadowRoot.appendChild(welcomeSection)

        const script = this.ownerDocument.createElement("script")
        script.setAttribute("src","https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")
        this.shadowRoot.appendChild(script)
      }
    }
  }
customElements.define("main-welcome", welcome);