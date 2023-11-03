import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { nav, photo, bar_library, library } from "../../components/export";
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
        loadCss(this, styles)
    }
}
}

customElements.define(`porfile-container`, porfile)