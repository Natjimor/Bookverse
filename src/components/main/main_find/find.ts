import styles from "./styles.css"
import { loadCss } from "../../../utils/styles";

export default class mainFind extends HTMLElement {
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
        <section>     
        <h2>Find something new</h2>
        <div class="container">
            <div id="box">
                <img src="https://cdn.kobo.com/book-images/5a42cde6-7bee-46d7-b3fb-55ffff1a3f09/353/569/90/False/by-the-pricking-of-my-thumbs.jpg" alt="">
                <div class="text">
                    <h3>The murder of Roger Ackroyd</h3>
                    <p>Roger Ackroyd knew too much. He knew that the woman he loved had poisoned her brutal first husband. He suspected also that someone had been blackmailing her. Then, tragically, came the news that she had taken her own life with an apparent drug overdose.
                    However the evening post brought Roger one last fatal scrap of information, but before he could finish reading the letter, he was stabbed to death. Luckily one of Roger’s friends and the newest resident to retire to this normally quiet village takes over—none other than Monsieur Hercule Poirot.</p>
                </div>
            </div>
        </div>
        </section>
        `;
        loadCss(this, styles);
      }
    }
  }
customElements.define("main-find", mainFind);