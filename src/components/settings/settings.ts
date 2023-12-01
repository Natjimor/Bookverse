import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "../export";
import { subirImagen } from "../../services/firebase";

export class settingsPorfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

        const inputImagen = this.ownerDocument.createElement("input")
            inputImagen.setAttribute("type", "file")
            inputImagen.setAttribute("placeholder", "your image!")
            inputImagen.classList.add("subir")

      const back = this.ownerDocument.createElement("div");
      back.classList.add("back");

      const div = this.ownerDocument.createElement("div");
      div.classList.add("fondo");

      const image = this.ownerDocument.createElement("img");
      image.src =
        "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
      image.classList.add("profile_photo");

      const name = this.ownerDocument.createElement("h1");
      name.textContent = "Valentalia";

      const user = this.ownerDocument.createElement("p");
      user.textContent = `@${name.textContent || "username"}`;

      const save = this.ownerDocument.createElement("div");
      save.classList.add("save");

      const p = this.ownerDocument.createElement("p");
      p.textContent = "Editing your profile right now"
      p.classList.add("Psave");
   
      const btnSave = this.ownerDocument.createElement("button");
      btnSave.textContent = "Save"

      btnSave.addEventListener("click", () => {
        subirImagen( inputImagen.files![0])})

      const cancel = this.ownerDocument.createElement("button");
      cancel.textContent = "Cancel"
      cancel.classList.add("cancel") 

      div.appendChild(inputImagen)
      div.appendChild(image);
      div.appendChild(name);
      div.appendChild(user);
      back.appendChild(div)
      save.appendChild(p)
      save.appendChild(btnSave)
      save.appendChild(cancel)
     
      loadCss(this, styles);
      this.shadowRoot.appendChild(back);
      this.shadowRoot.appendChild(save)
    
    }
  }
}

customElements.define("save-settings", settingsPorfile);
