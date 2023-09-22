
import Flickity from 'flickity';

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
      
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
      <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
      <link rel="stylesheet" href="/dist/main/css/carousels.css">
      <div class="main-carousel" >
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9sbxVgy949Y5qirIfs2vnwEXi7QsoYarRyU9r2s6UoQeLAmhD"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTuRYJ3ArjiENjEu7b77oNRR3u-mQt_ZBY4oGzCux5dOKVSrOqm"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4ZYvv3aFN7sBtXetGWhfEISHiIwZgBz-wq13SEmkv9g06eCDR"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdC2OWCw6yGAXCrsGZOZ-2pirzc-rACoB1B5veyl7m0Es-6tgw"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPl75K8DI-pUFK4MOI6E3KC7EE6UnLy7gdgXb3rM-fBVcPHar"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuG2InZ2kgsLzVYYXZm21IRTEW7Nqy2iNIUHBXsOZUNZv0Be9s"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJB_pjB81deS4ZHQ0TwQlINwyZ5WT8lazrGCwYK7rDYAMEUNsz"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkNEcsJaOBHYD_JO8oC3PtPye6rj9QxMypEznAmLZ-ooMmOeq"></div>
        <div class="carousel-cell"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54dw0TOiRJRzY-Uojnz8xTpa8hOqz6kN_9CanCeg8Nu79FUNuhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54dw0TOiRJRzY-Uojnz8xTpa8hOqz6kN_9CanCeg8Nu79FUNu"></div>
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

customElements.define('forthy-carrusel', forthy_carrusel);
export default forthy_carrusel