import {getProductos, updateProducto} from "../data/api.js";

const id = document.getElementById("id");
const titulo = document.getElementById("titulo");
const imagen = document.getElementById("imagen");
const precio = document.getElementById("precio");
const categoriaNombre = document.getElementById("nom-categoria");
const categoriaId = document.getElementById("id-categoria");

const botonGuardar = document.getElementById("botonGuardar");
const botonBuscar = document.getElementById("botonBuscar");
let productos = await getProductos();

botonBuscar.addEventListener("click", buscarProducto);

function buscarProducto(){
    let idvalor = document.getElementById("id").value;
    productos.forEach(producto => {
        if(producto.id == idvalor){
            id.disiable = true;
            titulo.value = producto.titulo;
            imagen.value = producto.imagen;
            precio.value = producto.precio;
            categoriaNombre.value = producto.categoria.nombre;
            categoriaId.value = producto.categoria.id;
        }
    })
}

botonGuardar.addEventListener("click", guardarProducto);

function guardarProducto(){
    let idvalor = document.getElementById("id").value;
    let titulovalor = document.getElementById("titulo").value;
    let imagenvalor = document.getElementById("imagen").value;
    let preciovalor = document.getElementById("precio").value;
    let categoriaidvalor = document.getElementById("id-categoria").value;
    let categorianombrevalor = document.getElementById("nom-categoria").value;

    let producto = {
        "id": idvalor,
        "titulo": titulovalor,
        "imagen": imagenvalor,
        "precio": preciovalor,
        "categoria":{
            "id": categoriaidvalor,
            "nombre":categorianombrevalor
        }
    }
    updateProducto(producto.id,producto);
}