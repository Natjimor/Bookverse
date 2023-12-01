import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";

import carousel, { image } from "../../main_welcome/welcome_carousel/carousel";
import Flickity from 'flickity';
console.log(carousel)

export default class fantasy extends HTMLElement {
    
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

    //     books.Fantasy.forEach((e:any) => {
    //         const carousel = this.ownerDocument.createElement("welcome-carousel")
    //         carousel.setAttribute(image.image, e.image)
    //         carousel.setAttribute(image.name, e.name)

    //         container.appendChild(carousel)
    //     })

    //     this.shadowRoot.appendChild(container)

    //     const script = this.ownerDocument.createElement("script")
    //     script.setAttribute("src","https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")
    //     this.shadowRoot.appendChild(script)
    //   }
    // }
    // initializeCarousel() {
    //   if (this.shadowRoot) {
  
    //     const elem = this.shadowRoot.querySelector('.main-carousel');
    //     if (elem) {
    //       new Flickity(elem, {
    //         freeScroll: false,
    //         groupCells: true,
    //         cellAlign: 'left',
    //         contain: true
    //       });
    //     }
    //   }
    // }
  }}}
customElements.define("fantasy-carousel", fantasy);