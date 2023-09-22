
import Flickity from 'flickity';

class third_carrusel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
      <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
      <link rel="stylesheet" href="./main/css/carousels.css">

      <div class="main-carousel" >
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdC2OWCw6yGAXCrsGZOZ-2pirzc-rACoB1B5veyl7m0Es-6tgw"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1gwxFKMbxyTCNnQZvEpL4iqrjb5-4sXj1vGPJoZiYkWo4Us6K"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm-ZCaNxSOAIhh8SryQ53YeKF1X9mS-HBayVKSa7bIeBcy7otu"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSp7_U_Rf1VB86JFLor8XuhekQf9kff2IOgEmKkmsijrsH6Ye5c"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRO5wd4b8uUdhLuKoXVeAfcaUOtAO5obAvCPrKaW4LOfWh3vkBO"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuG2InZ2kgsLzVYYXZm21IRTEW7Nqy2iNIUHBXsOZUNZv0Be9s"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXhUzi9IEN2f_raWyflToI7HGYMf3yN0Ug1lN1kSBhQJXtyTNN"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItYWGKGvzXr77jyZgHW7KxvGntGgr2_GMSNTvI7WEmCxOtzH"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYRDexaQcV6nwaGCDYQkbJrnX97_6PjljtmYVJ34eV0WeKxfC3"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbS11fO7XBapNbYlSI6XWZVoKT_l0dO375dTdck39psh_uS-32"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4wPvTDs00cTU4Ih6D8jC3A2-sKNAhc9DEn18ZfVwkSMLBZi4g"></div>
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