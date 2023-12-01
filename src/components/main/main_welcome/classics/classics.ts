import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";
import carousel, { image } from "../welcome_carousel/carousel";
import Flickity from 'flickity';
import { getBooks } from "../../../../services/firebase";
console.log(carousel)

export default class classic extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      getBooks(this)
    }
  
    render(booksByGenreData: any) {
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

        const container = this.ownerDocument.createElement("div")
        container.classList.add("main-carousel")
        container.setAttribute("id","carousel1")

        booksByGenreData.classics.forEach((e:any) => {
          const carousel = this.ownerDocument.createElement("welcome-carousel")
          carousel.setAttribute(image.image, e.image)
          carousel.setAttribute(image.name, e.name)

          container.appendChild(carousel)
        })

        this.shadowRoot.appendChild(container)

        const script = this.ownerDocument.createElement("script")
        script.setAttribute("src","https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")
        this.shadowRoot.appendChild(script)
        this.initializeCarousel();
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
customElements.define("classic-carousel", classic);