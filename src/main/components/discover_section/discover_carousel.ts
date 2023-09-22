import Flickity from 'flickity';
import { data_discover } from "./data_discover";
class carousel extends HTMLElement {
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
      
      let container = ""
       data_discover.map( (book)=>{
        container += `
        <div class="carousel-cell">
              <img src="${book.img}">
        </div>`
      })

      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
          <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
          <link rel="stylesheet" href="./main/css/discover_carousel.css">
          
          <div div class="carousel" data-flickity='{ "autoPlay": true }'>
          ${container}
          </div>
          <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      `;
    }
  }

  initializeCarousel() {
    if (this.shadowRoot) {

      const elem = this.shadowRoot.querySelector('.carousel');
      if (elem) {
        new Flickity(elem, {
          freeScroll: true,
          wrapAround: true,
          autoPlay: 1500,
          cellAlign: 'left',
          contain: true
        });
      }
    }
  }
}

customElements.define("carousel-container", carousel);
export default carousel;