import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import {books} from "../../../services/books"
import carousel, { image } from "./welcome_carousel/carousel";
import Flickity from 'flickity';
console.log(carousel)

export default class welcome extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
      this.initializeCarousel();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        loadCss(this, styles);
        const link1 = this.ownerDocument.createElement("link")
        link1.setAttribute("rel", "stylesheet")
        link1.setAttribute("href","https://unpkg.com/flickity@2/dist/flickity.min.css")
        this.shadowRoot.appendChild(link1)

        const link2 = this.ownerDocument.createElement("link")
        link2.setAttribute("rel", "stylesheet")
        link2.setAttribute("href","/node_modules/flickity/css/flickity.css")
        this.shadowRoot.appendChild(link2)

        const discoverSection = this.ownerDocument.createElement("section")

        const containerText = this.ownerDocument.createElement("div")
        containerText.classList.add("textContainer")
        const welcome = this.ownerDocument.createElement("h2")
        welcome.textContent = "Welcome Home"
        const hr = this.ownerDocument.createElement("hr")
        containerText.appendChild(welcome)
        containerText.appendChild(hr)
        discoverSection.appendChild(containerText)


        const container = this.ownerDocument.createElement("div")
        container.classList.add("main-carousel")

        books.Classics.forEach((e:any) => {
            const carousel = this.ownerDocument.createElement("welcome-carousel")
            carousel.setAttribute(image.image, e.image)
            carousel.setAttribute(image.name, e.name)
            
            container.appendChild(carousel)
        })
        
        discoverSection.appendChild(container)
        this.shadowRoot.appendChild(discoverSection)

        const script = this.ownerDocument.createElement("script")
        script.setAttribute("src","https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")
        this.shadowRoot.appendChild(script)
      }
    }
    initializeCarousel() {
      if (this.shadowRoot) {
  
        const elem = this.shadowRoot.querySelector('.main-carousel');
        if (elem) {
          new Flickity(elem, {
            freeScroll: false,
            groupCells: true,
            cellAlign: 'left',
            contain: true
          });
        }
      }
    }
  }
customElements.define("main-welcome", welcome);