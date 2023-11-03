import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import {books} from "../../../services/discover"
import carousel, { image } from "./welcome_carousel/carousel";
import Flickity from 'flickity';
console.log(carousel)

export default class discover extends HTMLElement {
    
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
        containerText.classList.add("tittle")
        const tittle = this.ownerDocument.createElement("h2")
        tittle.textContent = "Discover your next reading"
        containerText.appendChild(tittle)
        discoverSection.appendChild(containerText)

        const container = this.ownerDocument.createElement("div")
        container.classList.add("carousel")
        container.setAttribute("data-flickity", '{ "autoPlay": true }');

        books.map((e:any) => {
            const carousel = this.ownerDocument.createElement("discover-carousel")
            carousel.setAttribute(image.img, e.img)
            carousel.setAttribute(image.book, e.book)
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
  
        const elem = this.shadowRoot.querySelector('.carousel');
        if (elem) {
          new Flickity(elem, {
            freeScroll: false,
            wrapAround: true,
            autoPlay: 1500,
            cellAlign: 'left',
            contain: true
          });
        }
      }
    }
  }
customElements.define("main-discover", discover);