import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export default class landingQuote extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        loadCss(this, styles);

        const quotes = this.ownerDocument.createElement("section")
        const divLeft = this.ownerDocument.createElement("div")
        divLeft.classList.add("Left")
        const divRight = this.ownerDocument.createElement("div")
        divRight.classList.add("Right")

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src","https://enyasattic.com/cdn/shop/products/Pride_Prejudice01.png?v=1698308640")
        img.setAttribute("id", "img")
        img.setAttribute("alt","Pride and Prejudice")
        this.appendChild(img)

        const quote = this.ownerDocument.createElement("img")
        quote.setAttribute("src","https://pbs.twimg.com/media/F9_KiCHXQAE4VZP?format=png&name=240x240")
        quote.setAttribute("id", "quote")
        quote.setAttribute("alt","Quote")
        this.appendChild(quote)

        const tittle = this.ownerDocument.createElement("h2")
        tittle.textContent = "Vanity and pride are different things, although they are often used as synonyms. Pride is related to the opinion we have of ourselves; vanity is related to what we would like others to think of us."
        const autor = this.ownerDocument.createElement("h4")
        autor.textContent = "-Jane Austine"
        const info = this.ownerDocument.createElement("p")
        info.textContent = "Jane Austen (Steventon, December 16, 1775-Winchester, July 18, 1817) was a British novelist who lived during the Georgian era. The irony she used to provide her novels with comedy makes Jane Austen to be considered among the classics of the English novel, while her reception goes, even nowadays, beyond the academic interest, being her works read by a wider public."
        
        divLeft.appendChild(img)
        divRight.appendChild(quote)
        divRight.appendChild(tittle)
        divRight.appendChild(autor)
        divRight.appendChild(info)
        
        quotes.appendChild(divLeft)
        quotes.appendChild(divRight)

        this.shadowRoot.appendChild(quotes)
      }
    }
  }
customElements.define("landing-quote", landingQuote);