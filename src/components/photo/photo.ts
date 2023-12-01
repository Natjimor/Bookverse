import styles from "./styles.css"
import { loadCss } from "../../utils/styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import "../export";

export class photo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    if (this.shadowRoot) {

      const auth = getAuth();
      const firestore = getFirestore();

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

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // El usuario está autenticado, ahora puedes obtener información adicional desde Firestore
          const userDocRef = doc(firestore, 'users', user.uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            name.textContent = userData.name || "users"; // Usa el nombre de usuario desde Firestore o uno predeterminado
          }
        }
      });

      const user = this.ownerDocument.createElement("p");
      user.textContent = `@${name.textContent || "users"}`;

      div.appendChild(image);
      div.appendChild(name);
      div.appendChild(user);
      back.appendChild(div)

      loadCss(this, styles);
      this.shadowRoot.appendChild(back);
    }
  }
}

customElements.define("photo-container", photo);
