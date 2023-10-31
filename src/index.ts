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
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "./css/board.css")

            const main = this.ownerDocument.createElement("board-grid")

            this.shadowRoot?.appendChild(link)
            this.shadowRoot?.appendChild(main)
        }
    }
}

customElements.define("bookverse-container", app)