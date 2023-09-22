import "./welcome_section/reading_carrusel"
import "./welcome_section/fantasy_carrusel"
import "./welcome_section/mistery_carrusel"
import "./welcome_section/trends_carrusel"
import "./welcome_section/find"

class Carrusel_tittle extends HTMLElement {
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
        <link rel="stylesheet" href="/dist/main/css/carrusel_tittle.css">
        <div>
        <h2>Welcome Home</h2>
        <hr>
        <h2>Continue reading</h2>
        <carrusel-container></carrusel-container>
        <h2>Trends this week</h2>
        <second-carrusel></second-carrusel>
        <div>
        <find-container></find-container>
        </div>
        <h2>Fantasy Books</h2>
        <thirs-carrusel></thirs-carrusel>
        <h2>Mistery Books</h2>
        <forthy-carrusel></forthy-carrusel>
        </div>
        
        `
    }
}
}

customElements.define(`carrusel-tittle`,Carrusel_tittle)
export default Carrusel_tittle