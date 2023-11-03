import styles from "./styles.css"
import { loadCss } from "../../utils/styles";

export class library extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {

      const div = this.ownerDocument.createElement("div");
      div.classList.add("fondo2");

      const image = this.ownerDocument.createElement("img");
      image.src =
        "";
      image.classList.add("book_photo");

     const divBook = this.ownerDocument.createElement("div")
     divBook.classList.add("addBooks")

     const img = this.ownerDocument.createElement("img")
     img.setAttribute

      const tittle = this.ownerDocument.createElement("h3");
      tittle.classList.add("tittle")
      tittle.textContent = "READ LATER";

      const book_name = this.ownerDocument.createElement("h3");
      book_name.textContent = "Hamlet";

      const author = this.ownerDocument.createElement("p");
      author.classList.add("author")
      author.textContent = `autor`;
      
      loadCss(this, styles);
      div.appendChild(divBook)
      div.appendChild(tittle)
      div.appendChild(image);
      div.appendChild(book_name);
      div.appendChild(author);

      this.shadowRoot.appendChild(div);
    }
  }
}

customElements.define("library-container", library);
