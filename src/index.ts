import "./screens/main/main";

class app extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=``

            const main = this.ownerDocument.createElement('main-bookverse')
            this.shadowRoot.appendChild(main)
        }
    }
}

customElements.define("bookverse-container", app)