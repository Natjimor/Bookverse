
import Flickity, { data } from 'flickity';
import { data_mistery } from './data_mistery';

class forthy_carrusel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

    this.render();
  }

  render() {
    if (this.shadowRoot) {

      let container = ""
       data_mistery.map( (book)=>{
        container += `
        <div class="carousel-cell">
              <img src="${book.img}">
        </div>`
      })
      
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
      <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
      <link rel="stylesheet" href="/dist/main/css/carousels.css">
      <div class="main-carousel" >
        ${container}
      </div>
     
      <script src="/path/to/flickity.pkgd.min.js"></script>
      <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
      `;
      
      
      const elem = this.shadowRoot.querySelector('.main-carousel');
      if (elem) {
        new Flickity(elem, {
          groupCells: true,
          cellAlign: 'left',
          contain: true
        });
      }
    }
  }
}

customElements.define('forthy-carrusel', forthy_carrusel);
export default forthy_carrusel