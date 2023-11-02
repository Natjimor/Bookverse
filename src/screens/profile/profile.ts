import { nav } from "../../components/search_bar/bar";
import { photo } from "../../components/photo/photo";
console.log(photo);


export class porfile extends HTMLElement {
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
         <nav-container></nav-container>
         <photo-container></photo-container>
        `
    }
}
}

customElements.define(`porfile-container`, porfile)