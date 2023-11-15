import {getCarrito,deleteCarrito,GuardarCompras,updateCarrito} from "../data/api.js";
let productosEnCarrito = await getCarrito();
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
let botonesEditar = document.querySelectorAll(".carrito-producto-editar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const botonEditar = document.querySelector("#carrito-acciones-editar");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad-${producto.id}">
                    <small>Cantidad</small>
                    <p><button class="carrito-producto-editar-min" id="${producto.id}" disabled > - </button>  ${producto.cantidad}  <button class="carrito-producto-editar-max" id="${producto.id}" disabled > + </button></p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-editar" id="${producto.id}"><i class="bi bi-pen"></i></button>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    actualizarBotonesEliminar();
    actualizarBotonesEditar();
    actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function actualizarBotonesEditar() {
    botonesEditar = document.querySelectorAll(".carrito-producto-editar");
    botonesEditar.forEach(boton => {
        boton.addEventListener("click", editarCantidad());
    });
}
function editarCantidad(){
    
    let buttonEditMin = document.querySelectorAll(`.carrito-producto-editar-min`);
    let buttonEditMax = document.querySelectorAll(".carrito-producto-editar-max");
    buttonEditMin.forEach(boton => {
        boton.disabled = false;
    });
    buttonEditMax.forEach(boton => {
        boton.disabled = false;
    });
    buttonEditMin.forEach(boton => {
        boton.addEventListener("click", restarCantidad);
    }); 
    buttonEditMax.forEach(boton => {
        boton.addEventListener("click", sumarCantidad);
    });
}

function sumarCantidad(e){ 
    console.log(e.currentTarget.id);
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
    actualizarCantidad(productosEnCarrito[index]);
    actualizarTotal();
}

function actualizarCantidad() {
    let buttonEditMin = document.querySelectorAll(".carrito-producto-editar-min");
    let buttonEditMax = document.querySelectorAll(".carrito-producto-editar-max");
    cargarProductosCarrito();
    buttonEditMin.forEach(boton => {
        boton.disabled = false;
    });
    buttonEditMax.forEach(boton => {
        boton.disabled = false;
    });
    actualizarTotal();
}



function restarCantidad(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    if(productosEnCarrito[index].cantidad > 1){
        productosEnCarrito[index].cantidad--;
        actualizarCantidad(productosEnCarrito[index]);
        actualizarTotal();
    }
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    deleteCarrito(idBoton);
    cargarProductosCarrito();
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
/*             productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); */
            productosEnCarrito.forEach(producto => {
                deleteCarrito(producto.id);
            })
            cargarProductosCarrito();
        }
      })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

async function comprarCarrito() {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}

botonEditar.addEventListener("click", editarCarrito);

async function editarCarrito() {
    console.log(productosEnCarrito);
    productosEnCarrito.forEach(producto => {
        updateCarrito(producto.id, producto);
    })
}