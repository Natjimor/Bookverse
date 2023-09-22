import "./main/components/nav_bar/bar"
import "./main/components/nav_bar/profile/menu"
import "./main/components/discover_section/discover"
import "./main/components/carrusel_tittle"

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
            this.shadowRoot.innerHTML=`
            <nav-container></nav-container>
            <discover-container></discover-container>
            <carrusel-tittle></carrusel-tittle>
        `
        }
    }
}

customElements.define("app-container", app)