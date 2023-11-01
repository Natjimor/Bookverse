export class menu extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
    
      if (this.shadowRoot) {

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./main/css/menu.css");
        this.shadowRoot.appendChild(link);
  
        const div = this.ownerDocument.createElement("div");
        div.classList.add ("desplegable_div")
        div.classList.add('hide-menu')

        const p = this.ownerDocument.createElement("p")
        p.innerHTML = "My profile"
        const p2 = this.ownerDocument.createElement("p")
        p2.innerHTML = "Library"
        const p3 = this.ownerDocument.createElement("p")
        p3.innerHTML = "Setting"
        const p4 = this.ownerDocument.createElement("p")
        p4.innerHTML = "Log Out"

        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
        div.appendChild(p4)
        this.shadowRoot.appendChild(div);
        this.classList.add('desplegable_div');

      }
    }
  }

  customElements.define("menu-container",menu)