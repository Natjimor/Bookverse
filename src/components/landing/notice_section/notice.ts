import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import {notices} from "../../../services/notices"
import carousel, { image } from "../landing_carousel/carousel";
import Flickity from 'flickity';

export default class notice extends HTMLElement {
    
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

        const noticeSection = this.ownerDocument.createElement("section")

        const container = this.ownerDocument.createElement("div")
        container.classList.add("carousel")
        container.setAttribute("data-flickity", '{ "autoPlay": true }');

        notices.map((e) => {
            const carousel = this.ownerDocument.createElement("landing-carousel")
            carousel.setAttribute(image.img, e.img)
            carousel.setAttribute(image.book, e.book)
            carousel.setAttribute(image.text, e.text)
            carousel.setAttribute(image.button, e.button)
            container.appendChild(carousel)
        })

        noticeSection.appendChild(container)
        this.shadowRoot.appendChild(noticeSection)

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
customElements.define("notice-container", notice);