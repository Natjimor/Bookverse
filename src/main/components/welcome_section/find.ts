
class find extends HTMLElement {
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
      <link rel="stylesheet" href="./main/css/new.css">
      <section>     
        <h1>Find something new</h1>
        <div class="container">
        <div id="box">
          <img src="https://cdn.kobo.com/book-images/5a42cde6-7bee-46d7-b3fb-55ffff1a3f09/353/569/90/False/by-the-pricking-of-my-thumbs.jpg" alt="">
          <div class="text">
            <h2>The murder of Roger Ackroyd</h2>
            <br>
            <p>Roger Ackroyd knew too much. He knew that the woman he loved had poisoned her brutal first husband. He suspected also that someone had been blackmailing her. Then, tragically, came the news that she had taken her own life with an apparent drug overdose.
            However the evening post brought Roger one last fatal scrap of information, but before he could finish reading the letter, he was stabbed to death. Luckily one of Roger’s friends and the newest resident to retire to this normally quiet village takes over—none other than Monsieur Hercule Poirot.</p>
          </div>
        </div>
        </div>
      </section>
    `;
    }
  }
}

customElements.define("find-container", find);

export default find;