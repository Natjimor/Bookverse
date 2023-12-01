import { sing_in, app_singup, porfile, landing, main } from "./components/export";
import firebaseConfig from "./services/firebase";
import { emptyState, addObserver, appState } from "./store/index";
import { Screens } from "./types/navigation";
import { navigate } from "./store/acctions";
console.log(navigate)
console.log(emptyState)

console.log(firebaseConfig);
console.log(sing_in, app_singup, porfile, landing, main);

class app extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      switch (appState.screen) {
        case Screens.porfile:
          const porfile = this.ownerDocument.createElement(`porfile-container`);
          this.shadowRoot.appendChild(porfile);
          break;
        case Screens.sing_up:
          const signUp = this.ownerDocument.createElement(`app-singup`);
          this.shadowRoot.appendChild(signUp);
          break;
        case Screens.sing_in:
          const singIn = this.ownerDocument.createElement(`sing-container`);
          this.shadowRoot.appendChild(singIn);
          break;
        case Screens.landing:
          const Landig = this.ownerDocument.createElement(`landing-bookverse`);
          this.shadowRoot.appendChild(Landig);
          break;
        case Screens.main:
          const Main = this.ownerDocument.createElement(`main-bookverse`);
          this.shadowRoot.appendChild(Main);
          break;

        case Screens.reading:
          const Reading = this.ownerDocument.createElement(`sing-container`);
          this.shadowRoot.appendChild(Reading);
          break;

        case Screens.settings:
          const Setings = this.ownerDocument.createElement(`settings-screen`);
          this.shadowRoot.appendChild(Setings);
          break;
        case Screens.pop:
            const pop = this.ownerDocument.createElement(`pop-container`);
            this.shadowRoot.appendChild(pop);
            break;
        default:
          break;
      }
    }
  }
}

customElements.define("bookverse-container", app)