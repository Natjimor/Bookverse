import styles from "./styles.css"
import { loadCss } from "../../../../utils/styles";
import { addObserver, appState, dispatch } from "../../../../store";
import { navigate } from "../../../../store/acctions";
import { Screens } from "../../../../types/navigation";

class profile extends HTMLElement {
  menuVisible: boolean = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const image_add = this.shadowRoot?.querySelector(
      ".profile_name"
    ) as HTMLElement;
    const menuAction = this.shadowRoot?.querySelector(
      ".desplegable_div"
    ) as HTMLDivElement;
    console.log(menuAction);

    image_add?.addEventListener("click", () => {
      if (menuAction) {
        if (this.menuVisible === false) {
          menuAction.classList.remove("hiden-menu");
        } else {
          menuAction.classList.add("hiden-menu");
        }

        this.menuVisible = !this.menuVisible;
      }
    });
  }

  render() {
    if (this.shadowRoot) {

      const name = this.ownerDocument.createElement("p");
      name.classList.add("profile_name");
      name.innerHTML = "VALENTALIA";

      const image = this.ownerDocument.createElement("img");
      image.src = "https://elcomercio.pe/resizer/5Zq8UFMDoUYBPrnx_wQPErxH_3I=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DNVJOUDDF5DTHM3TVP2M7FNNEY.jpg";
      image.classList.add("profile_photo");

      const div = this.ownerDocument.createElement("div");
      div.classList.add("profile_div");

      const divMenu = this.ownerDocument.createElement("div");
      divMenu.classList.add("desplegable_div");
      divMenu.classList.add("hiden-menu");

      const p = this.ownerDocument.createElement("p");
      p.classList.add("menuP")
      p.innerHTML = "My profile";

      const p3 = this.ownerDocument.createElement("p");
      p3.classList.add("menuP")
      p3.innerHTML = "Setting";
      const p4 = this.ownerDocument.createElement("p");
      p4.classList.add("menuP")
      p4.innerHTML = "Log Out";

      p.addEventListener(('click'), () =>{
        dispatch(navigate(Screens.porfile))
     })

      p4.addEventListener(('click'), () =>{
        dispatch(navigate(Screens.landing))
     })

      divMenu.appendChild(p);
      divMenu.appendChild(p3);
      divMenu.appendChild(p4);
      div.appendChild(image);
      div.appendChild(name);
      this.shadowRoot.appendChild(divMenu);
      this.shadowRoot.appendChild(div);
      loadCss(this, styles);
    }
  }
}

customElements.define("profile-container", profile);
export default profile;
