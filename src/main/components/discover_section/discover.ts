import "./discover_carousel"
class discover extends HTMLElement {
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
      <link rel="stylesheet" href="./main/css/discover.css">
      <section>
        <div>
          <h2>Discover your next reading</h2>
          <carousel-container></carousel-container>
        </div>
      </section>
      `;
    }
  }
}

customElements.define("discover-container", discover);
export default discover;