import menu from "./menu"

class profile extends HTMLElement {
    menuVisible: boolean = true; 

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();

      const image_add = this.shadowRoot?.querySelector('.profile_photo') as HTMLElement;
  
      const menu = this.shadowRoot?.querySelector(".desplegable_div");
  
      image_add?.addEventListener('click', () => {
        if(menu){
        if (this.menuVisible) {
          menu.classList.remove('.hide-menu'); 
        } else {
          menu.classList.add('.hide-menu'); 
        }
  
        this.menuVisible = !this.menuVisible;
    }});
      
    }
  
    render() {
    
      if (this.shadowRoot) {
        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./main/css/nav.css");
        this.shadowRoot.appendChild(link);

        const name = this.ownerDocument.createElement("p");
        name.classList.add("profile_name")
        name.innerHTML = "VALENTALIA";

        const image = this.ownerDocument.createElement("img");
        image.src = "https://scontent.fclo4-1.fna.fbcdn.net/v/t39.30808-6/337042797_702627534993222_5054943018698861907_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeH93LaaCs2qck_6q75nYJiqyN9MQSH4QmHI30xBIfhCYczUOlqqAzRYSJxRma0zGJqyxbb7XGZY5G__FUjSUa1e&_nc_ohc=IztcWk5nrMwAX-Q2BHM&_nc_ht=scontent.fclo4-1.fna&oh=00_AfA7XlELHTjN8k5qcISw9t-KMwdYdwXKrqw-zdH_l-9zTA&oe=6512B422"
        image.classList.add("profile_photo")
    
      const div = this.ownerDocument.createElement("div");
      div.classList.add("profile_div")

        div.appendChild(image)
        div.appendChild(name)

        this.shadowRoot.appendChild(div)
      }
    }
  }

  customElements.define("profile-container",profile)
  export default profile