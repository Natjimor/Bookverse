
import Flickity from 'flickity';
import { data_fantasy } from './data_fantasy';
export enum books_image {
  "img" = "img",
}

class third_carrusel extends HTMLElement {

  props: Record<books_image, string> = {
    img: "",
  };

  nameIndex: null | number = null;

  static get observedAttributes() {
    const options: books_image[] = [
      books_image.img,
    ];
    return options;
  }

  attributeChangedCallback(
    propName: books_image, _: string, value: string) {
    switch (propName) {
      default:
          this.props[propName] = value;
          break;
  }
  }

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
       data_fantasy.map( (book)=>{
        container += `
        <div class="carousel-cell">
              <img src="${book.img}">
        </div>`
      })
      
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
      <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
      <link rel="stylesheet" href="./main/css/carousels.css">

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

// Define el nombre de la etiqueta personalizada
customElements.define('thirs-carrusel', third_carrusel);
export default third_carrusel