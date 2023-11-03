import { nav, photo, bar_library, library } from "../../export";
import { menu } from "../../components/search_bar/nav_bar/profile/menu";
console.log(menu);
console.log(photo);
console.log(bar_library, library);

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
         <menu-container></menu-container>
         <photo-container></photo-container>
         <barlib-container></barlib-container>
         <library-container></library-container>
        `
    }
}
}

customElements.define(`porfile-container`, porfile)