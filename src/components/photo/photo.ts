export class photo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const css = this.ownerDocument.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("href", "/dist/profile/css/component.css");
      this.shadowRoot.appendChild(css);

      const back = this.ownerDocument.createElement("div");
      back.classList.add("back");

      const div = this.ownerDocument.createElement("div");
      div.classList.add("fondo");

      const image = this.ownerDocument.createElement("img");
      image.src =
        "https://elcomercio.pe/resizer/5Zq8UFMDoUYBPrnx_wQPErxH_3I=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DNVJOUDDF5DTHM3TVP2M7FNNEY.jpg";
      image.classList.add("profile_photo");

      const name = this.ownerDocument.createElement("h1");
      name.textContent = "Valentalia";

      const user = this.ownerDocument.createElement("p");
      user.textContent = `@valentalia`;

      div.appendChild(image);
      div.appendChild(name);
      div.appendChild(user);
      back.appendChild(div)

      this.shadowRoot.appendChild(back);
    }
  }
}

customElements.define("photo-container", photo);
