class main extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <nav-container></nav-container>
            <discover-container></discover-container>
            <carrusel-tittle></carrusel-tittle>
        `
        }
    }
}

customElements.define("bookverse-main", main)