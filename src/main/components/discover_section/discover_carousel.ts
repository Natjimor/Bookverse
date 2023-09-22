import Flickity from 'flickity';

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
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
          <link rel="stylesheet" href="/node_modules/flickity/css/flickity.css">
          <link rel="stylesheet" href="./main/css/discover_carousel.css">
          
          <div div class="carousel" data-flickity='{ "autoPlay": true }'>
            <div class="carousel-cell">
              <img src="https://i.ytimg.com/vi/Z7UwVNLsnTo/maxresdefault.jpg">
            </div>
            <div class="carousel-cell">
              <img src="https://m.media-amazon.com/images/S/pv-target-images/865b7d1e9e78ab7f2428d31d810b26c1e6a3cb88fe8b45108676d4d94f1a5d77.jpg">
            </div>
            <div class="carousel-cell"> 
              <img src="https://entupantalla.com/wp-content/uploads/2022/02/boulevar.jpg">
            </div>
            <div class="carousel-cell"> 
              <img src="https://ao5gallery.com/cdn/shop/products/Deathly-Hallows.jpg?v=1594485365">
            </div>
            <div class="carousel-cell">
              <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wii_24/SI_Wii_AliceInWonderland_enGB_image1600w.jpg">
            </div>
            <div class="carousel-cell">
              <img src="https://s.abcnews.com/images/GMA/GMA_JuneBookClubMain_V01_GV_1684785148528_hpMain_16x9_1600.jpg">
            </div>
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