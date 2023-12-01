import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { nav, photo, settingsPorfile} from "./../../components/export";
console.log(photo, nav, settingsPorfile);
console.log();

export class setting extends HTMLElement {
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
         <save-settings></save-settings>
        `
        loadCss(this, styles)
    }
}
}

customElements.define(`settings-screen`, setting)