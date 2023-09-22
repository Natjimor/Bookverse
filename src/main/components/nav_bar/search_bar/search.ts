class search extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
    
      if (this.shadowRoot) {

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./main/css/nav.css");
        this.shadowRoot.appendChild(link);
  
        const input = this.ownerDocument.createElement("input")
        input.type = "text";
        input.placeholder = "...";
        input.classList.add("search")
        

        this.shadowRoot.appendChild(input);
      }
    }
  }

  customElements.define("search-container",search)
  export default search