import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";
import menu from "../menu/menu";
console.log(menu)

export default class profile extends HTMLElement {
    menuVisible: boolean = true; 

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();

      const image_add = this.shadowRoot?.querySelector('.profile_photo') as HTMLElement;
  
      const menu = this.shadowRoot?.querySelector(".desplegable_div");
  
      image_add?.addEventListener('click', () => {
        if(menu){
        if (this.menuVisible) {
          menu.classList.remove('.hide-menu'); 
        } else {
          menu.classList.add('.hide-menu'); 
        }
  
        this.menuVisible = !this.menuVisible;
    }});
      
    }
  
    render() {
    
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        loadCss(this, styles);

        const name = this.ownerDocument.createElement("p");
        name.classList.add("profile_name")
        name.innerHTML = "VALENTALIA";

        const image = this.ownerDocument.createElement("img");
        image.src = "https://elcomercio.pe/resizer/5Zq8UFMDoUYBPrnx_wQPErxH_3I=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DNVJOUDDF5DTHM3TVP2M7FNNEY.jpg"
        image.classList.add("profile_photo")
    
        const div = this.ownerDocument.createElement("div");
        div.classList.add("profile_div")

        div.appendChild(image)
        div.appendChild(name)

        this.shadowRoot.appendChild(div)
      }
    }
  }

customElements.define("profile-container",profile)