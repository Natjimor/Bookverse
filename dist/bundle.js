(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var e,t;if(this.shadowRoot){this.shadowRoot.innerHTML="";const o=this.ownerDocument.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href","./css/board.css");const s=this.ownerDocument.createElement("board-grid");null===(e=this.shadowRoot)||void 0===e||e.appendChild(o),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s)}}}customElements.define("bookverse-container",e)})();