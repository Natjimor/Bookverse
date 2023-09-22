
import Flickity from 'flickity';

class second_carrusel extends HTMLElement {
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
      <link rel="stylesheet" href="/dist/main/css/carousels.css">

      <div class="main-carousel" >
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXhUzi9IEN2f_raWyflToI7HGYMf3yN0Ug1lN1kSBhQJXtyTNN"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItYWGKGvzXr77jyZgHW7KxvGntGgr2_GMSNTvI7WEmCxOtzH"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYRDexaQcV6nwaGCDYQkbJrnX97_6PjljtmYVJ34eV0WeKxfC3"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbS11fO7XBapNbYlSI6XWZVoKT_l0dO375dTdck39psh_uS-32"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sbxVgy949Y5qirIfs2vnwEXi7QsoYarRyU9r2s6UoQeLAmhD"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRYJ3ArjiENjEu7b77oNRR3u-mQt_ZBY4oGzCux5dOKVSrOqm"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4ZYvv3aFN7sBtXetGWhfEISHiIwZgBz-wq13SEmkv9g06eCDR"></div>
        <div class="carousel-cell"> <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdC2OWCw6yGAXCrsGZOZ-2pirzc-rACoB1B5veyl7m0Es-6tgw"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPl75K8DI-pUFK4MOI6E3KC7EE6UnLy7gdgXb3rM-fBVcPHar"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuG2InZ2kgsLzVYYXZm21IRTEW7Nqy2iNIUHBXsOZUNZv0Be9s"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRq263cLF_4UOs5JlpiKHyqrbQi-uWaktPwfUsurjNY9vxjm_9l"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnh3dmvEMgE6YlFL4o_iqFx8s_DOwrZj36zvqCgJtIGfyWptKW"></div>
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
customElements.define('second-carrusel', second_carrusel);
export default second_carrusel