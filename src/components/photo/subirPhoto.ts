import { traerImagen } from "../../services/firebase"

export const crearImagen = async (contenedorProductos: HTMLElement) => {
    const listaProductos = await traerImagen()
    contenedorProductos.innerHTML = ""
    listaProductos.forEach((imagen) => { const contenedorProductoSolo = document.createElement("div")
    contenedorProductoSolo.classList.add("contenedorProductoSolo")
    contenedorProductos.appendChild(contenedorProductoSolo)

    const imagenUser = document.createElement("img")
    imagenUser.src = imagen.imagen
    contenedorProductoSolo.appendChild(imagenUser)})}
     