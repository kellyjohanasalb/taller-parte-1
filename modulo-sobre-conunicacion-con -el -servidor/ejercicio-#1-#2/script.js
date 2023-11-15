// Obteniendo referencias a los elementos del DOM
let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

// Función para cargar los detalles del producto seleccionado
function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;
    descripSeleccionada.innerHTML = "Descripción del modelo ";
    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;

    // Guardar en localStorage
    let productoInfo = {
        img: item.getElementsByTagName("img")[0].src,
        modelo: item.getElementsByTagName("p")[0].innerHTML,
        precio: item.getElementsByTagName("span")[0].innerHTML
    };
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoInfo));

    // Actualizar historial en sessionStorage
    actualizarHistorial(productoInfo);
}

// Función para cerrar el panel de selección
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

// Función para quitar los bordes de los items
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(let i = 0; i < items.length; i++){
        items[i].style.border = "none";
    }
}

// Función para actualizar el historial de productos vistos
function actualizarHistorial(productoInfo) {
    let historial = sessionStorage.getItem('historialProductos');
    historial = historial ? JSON.parse(historial) : [];
    historial.push(productoInfo);
    sessionStorage.setItem('historialProductos', JSON.stringify(historial));
}

// Función para cargar el último producto visto al cargar la página
function cargarUltimoProductoVisto() {
    let productoGuardado = localStorage.getItem('productoSeleccionado');
    if (productoGuardado) {
        productoGuardado = JSON.parse(productoGuardado);
        imgSeleccionada.src = productoGuardado.img;
        modeloSeleccionado.innerHTML = productoGuardado.modelo;
        precioSeleccionado.innerHTML = productoGuardado.precio;
    }
}

// Función que simula una operación asincrónica con una promesa
function obtenerDatosSimulados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulando datos obtenidos asincrónicamente
            const datosSimulados = {
                mensaje: "Datos obtenidos exitosamente",
                productos: [
                    { id: 1, nombre: "Producto A" },
                    { id: 2, nombre: "Producto B" }
                ]
            };
            resolve(datosSimulados);
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Función para mostrar los resultados de la promesa
function mostrarResultados(datos) {
    const seccionResultados = document.createElement('div');
    seccionResultados.innerHTML = `<h2>${datos.mensaje}</h2>`;
    datos.productos.forEach(producto => {
        seccionResultados.innerHTML += `<p>Producto ID: ${producto.id}, Nombre: ${producto.nombre}</p>`;
    });
    document.body.appendChild(seccionResultados);
}


// Modificar la función window.onload para incluir la nueva funcionalidad
window.onload = function() {
    cargarUltimoProductoVisto();

    // Llamar a la función de la promesa y mostrar resultados
    obtenerDatosSimulados().then(datos => {
        mostrarResultados(datos);
    }).catch(error => {
        console.log('Hubo un error:', error);
    });
}
